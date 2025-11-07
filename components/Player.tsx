import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import type { YouTubeVideo, YTPlayer, PlayerControls } from '../types';
import { PlayerState } from '../types';
import { PlayIcon, PauseIcon, NextIcon, PrevIcon, VolumeUpIcon, HeartIcon, ShuffleIcon, LyricsIcon, RepeatIcon, RepeatOneIcon } from './icons';

type RepeatMode = 'none' | 'playlist' | 'one';

interface PlayerProps {
  video: YouTubeVideo;
  onNext: () => void;
  onPrev: () => void;
  isFavorited: boolean;
  onToggleFavorite: (videoId: string) => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  isShuffleOn: boolean;
  onToggleShuffle: () => void;
  repeatMode: RepeatMode;
  onToggleRepeat: () => void;
  isLastVideo: boolean;
  onToggleLyrics: () => void;
  onTimeUpdate: (time: number) => void;
}

const Player = forwardRef<PlayerControls, PlayerProps>(({ video, onNext, onPrev, isFavorited, onToggleFavorite, volume, onVolumeChange, isShuffleOn, onToggleShuffle, repeatMode, onToggleRepeat, isLastVideo, onToggleLyrics, onTimeUpdate }, ref) => {
    const [player, setPlayer] = useState<YTPlayer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const playerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const onNextRef = useRef(onNext);
    useEffect(() => {
        onNextRef.current = onNext;
    }, [onNext]);

    // Use refs for values used in the onStateChange callback to avoid stale closures
    const repeatModeRef = useRef(repeatMode);
    useEffect(() => { repeatModeRef.current = repeatMode; }, [repeatMode]);

    const isLastVideoRef = useRef(isLastVideo);
    useEffect(() => { isLastVideoRef.current = isLastVideo; }, [isLastVideo]);

    const formatTime = (timeInSeconds: number) => {
        const totalSeconds = Math.floor(timeInSeconds);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        setProgress(0);
        setDuration(0);

        const createPlayer = () => {
            if (playerRef.current && video.id) {
                const newPlayer: YTPlayer = new window.YT.Player(playerRef.current, {
                    height: '0',
                    width: '0',
                    videoId: video.id,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                    },
                    events: {
                        onReady: (event: { target: YTPlayer }) => {
                            setPlayer(event.target);
                            event.target.playVideo();
                            event.target.setVolume(volume);
                            setDuration(event.target.getDuration());
                        },
                        onStateChange: (event: { data: PlayerState; target: YTPlayer }) => {
                            if (event.data === PlayerState.PLAYING) {
                                setIsPlaying(true);
                                setDuration(event.target.getDuration());
                            }
                            if (event.data === PlayerState.PAUSED) setIsPlaying(false);
                            if (event.data === PlayerState.ENDED) {
                                const currentRepeatMode = repeatModeRef.current;
                                const currentIsLastVideo = isLastVideoRef.current;

                                if (currentRepeatMode === 'one') {
                                    event.target.playVideo(); // Replays the current video
                                } else if (currentRepeatMode === 'playlist') {
                                    onNextRef.current();
                                } else { // repeatMode is 'none'
                                    if (!currentIsLastVideo) {
                                        onNextRef.current();
                                    } else {
                                        setIsPlaying(false); // Stop at the end of the playlist
                                    }
                                }
                            }
                            // When a new video is loaded, it gets cued. This ensures it plays automatically.
                            if (event.data === PlayerState.CUED) event.target.playVideo();
                        },
                    },
                });
            }
        };

        if (!window.YT) {
            window.onYouTubeIframeAPIReady = createPlayer;
        } else {
            if (player) {
                player.loadVideoById(video.id);
            } else {
                createPlayer();
            }
        }
    }, [video.id]); 
    
    useEffect(() => {
        if(player) {
           player.setVolume(volume);
        }
    }, [volume, player]);

    useEffect(() => {
        let timer: number | undefined;
        if (isPlaying && player) {
            timer = window.setInterval(() => {
                const currentTime = player.getCurrentTime();
                if (currentTime) {
                    onTimeUpdate(currentTime);
                    if (!isSeeking) {
                        setProgress(currentTime);
                    }
                }
            }, 250);
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isPlaying, player, onTimeUpdate, isSeeking]);


    const handlePlayPause = () => {
        if (!player) return;
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    };
    
    useImperativeHandle(ref, () => ({
        togglePlayPause: handlePlayPause,
    }));
    
    const handleProgressInteraction = useCallback((clientX: number): number | undefined => {
        if (!duration || !progressBarRef.current) return undefined;
        const bar = progressBarRef.current;
        const rect = bar.getBoundingClientRect();
        const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const newProgress = (offsetX / rect.width) * duration;
        return newProgress;
    }, [duration]);

    useEffect(() => {
        if (!isSeeking) return;

        const handleWindowMouseMove = (e: MouseEvent) => {
            const newProgress = handleProgressInteraction(e.clientX);
            if (newProgress !== undefined) {
                setProgress(newProgress);
            }
        };
        
        const handleWindowMouseUp = (e: MouseEvent) => {
            setIsSeeking(false);
            const newProgress = handleProgressInteraction(e.clientX);
            if (newProgress !== undefined && player) {
                player.seekTo(newProgress, true);
            }
        };

        window.addEventListener('mousemove', handleWindowMouseMove);
        window.addEventListener('mouseup', handleWindowMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
            window.removeEventListener('mouseup', handleWindowMouseUp);
        };
    }, [isSeeking, player, handleProgressInteraction]);


    const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsSeeking(true);
        const newProgress = handleProgressInteraction(e.clientX);
        if (newProgress !== undefined) {
            setProgress(newProgress);
        }
    };
    
    return (
        <div className="bg-gray-800/80 backdrop-blur-lg p-3 shadow-2xl rounded-t-xl md:rounded-t-none">
            <div id="player-container" className="absolute -top-full">
                <div ref={playerRef}></div>
            </div>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4 w-1/3">
                    <img src={video.thumbnailUrl} alt={video.title} className="w-14 h-14 rounded-md object-cover"/>
                    <div className="overflow-hidden">
                        <p className="font-bold text-white truncate">{video.title}</p>
                        <p className="text-sm text-gray-400 truncate">{video.channelTitle}</p>
                    </div>
                    <button
                        onClick={() => onToggleFavorite(video.id)}
                        className="p-2 rounded-full hover:bg-gray-700/50 transition-colors ml-2 flex-shrink-0"
                        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <HeartIcon filled={isFavorited} className={`h-5 w-5 ${isFavorited ? 'text-red-500' : 'text-white'}`} />
                    </button>
                </div>

                <div className="flex flex-col items-center gap-2 w-1/3 justify-center">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onToggleShuffle}
                            className={`p-2 transition-colors ${isShuffleOn ? 'text-teal-400 hover:text-teal-300' : 'text-gray-300 hover:text-white'}`}
                            aria-label={isShuffleOn ? "Disable shuffle" : "Enable shuffle"}
                        >
                            <ShuffleIcon />
                        </button>
                        <button onClick={onPrev} className="p-2 text-gray-300 hover:text-white transition-colors"><PrevIcon /></button>
                        <button onClick={handlePlayPause} className="p-3 bg-teal-500 rounded-full text-black hover:bg-teal-400 transition-colors shadow-lg">
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <button onClick={onNext} className="p-2 text-gray-300 hover:text-white transition-colors"><NextIcon /></button>
                        <button
                            onClick={onToggleRepeat}
                            className={`p-2 transition-colors ${repeatMode !== 'none' ? 'text-teal-400 hover:text-teal-300' : 'text-gray-300 hover:text-white'}`}
                            aria-label={`Repeat mode: ${repeatMode}`}
                        >
                            {repeatMode === 'one' ? <RepeatOneIcon /> : <RepeatIcon />}
                        </button>
                        {video.lyrics && (
                            <button
                                onClick={onToggleLyrics}
                                className="p-2 text-gray-300 hover:text-white transition-colors"
                                aria-label="Show lyrics"
                            >
                                <LyricsIcon />
                            </button>
                        )}
                    </div>
                     <div className="w-full flex items-center gap-2 text-xs text-gray-400 font-mono">
                        <span>{formatTime(progress)}</span>
                        <div
                            ref={progressBarRef}
                            onMouseDown={handleProgressMouseDown}
                            className="w-full h-4 group flex items-center cursor-pointer"
                            aria-label="Seek progress"
                        >
                            <div className="w-full h-1 bg-gray-600/50 rounded-full relative group-hover:h-1.5 transition-all duration-200">
                                <div 
                                    className="absolute h-full bg-teal-400 rounded-full"
                                    style={{ width: `${(progress / (duration || 1)) * 100}%` }}
                                >
                                </div>
                                <div
                                    className="absolute top-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                                    style={{ 
                                        left: `${(progress / (duration || 1)) * 100}%`, 
                                        transform: 'translate(-50%, -50%)' 
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 w-1/3 justify-end">
                  <VolumeUpIcon/>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => onVolumeChange(Number(e.target.value))}
                    className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    aria-label="Volume control"
                  />
                </div>
            </div>
        </div>
    );
});

export default Player;