
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import type { YouTubePlaylist, YouTubeVideo, PlayerControls } from './types';
import { getPlaylists } from './services/mockYoutubeApi';
import Player from './components/Player';
import PlaylistList from './components/PlaylistList';
import VideoList from './components/VideoList';
import LyricsModal from './components/LyricsModal';
import SearchResultsList from './components/SearchResultsList';
import QueuePanel from './components/QueuePanel';
import { MenuIcon, MusicNoteIcon, SearchIcon, CloseIcon, QueueListIcon } from './components/icons';

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

type RepeatMode = 'none' | 'playlist' | 'one';

const App: React.FC = () => {
    const [playlists, setPlaylists] = useState<YouTubePlaylist[]>([]);
    const [activePlaylistId, setActivePlaylistId] = useState<string | null>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [isQueueOpen, setIsQueueOpen] = useState<boolean>(false);
    const [volume, setVolume] = useState(50);
    const playerRef = useRef<PlayerControls>(null);
    const [isLyricsModalOpen, setIsLyricsModalOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [repeatMode, setRepeatMode] = useState<RepeatMode>('none');
    const [searchQuery, setSearchQuery] = useState('');
    const [playbackQueue, setPlaybackQueue] = useState<YouTubeVideo[]>([]);
    
    const [favoritedVideoIds, setFavoritedVideoIds] = useState<Set<string>>(() => {
        try {
            const item = window.localStorage.getItem('favoritedVideoIds');
            if (item) {
                const parsed = JSON.parse(item);
                if (Array.isArray(parsed) && parsed.every((id): id is string => typeof id === 'string')) {
                    return new Set(parsed);
                }
            }
            return new Set<string>();
        } catch (error) {
            console.error("Could not parse favorites from localStorage", error);
            return new Set<string>();
        }
    });

    const [isShuffleOn, setIsShuffleOn] = useState(false);

    useEffect(() => {
        try {
            window.localStorage.setItem('favoritedVideoIds', JSON.stringify(Array.from(favoritedVideoIds)));
        } catch (error) {
            console.error("Could not save favorites to localStorage", error);
        }
    }, [favoritedVideoIds]);

    useEffect(() => {
        const data = getPlaylists();
        setPlaylists(data);
        if (data.length > 0) {
            setActivePlaylistId(data[0].id);
        }
    }, []);
    
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) {
            return [];
        }
        const lowerCaseQuery = searchQuery.toLowerCase();
        const results: YouTubeVideo[] = [];
        const addedIds = new Set<string>();

        playlists.forEach(playlist => {
            playlist.videos.forEach(video => {
                if (video.title.toLowerCase().includes(lowerCaseQuery) && !addedIds.has(video.id)) {
                    results.push(video);
                    addedIds.add(video.id);
                }
            });
        });
        return results;
    }, [searchQuery, playlists]);

    const handleToggleFavorite = useCallback((videoId: string) => {
        setFavoritedVideoIds(prevIds => {
            const newIds = new Set(prevIds);
            if (newIds.has(videoId)) {
                newIds.delete(videoId);
            } else {
                newIds.add(videoId);
            }
            return newIds;
        });
    }, []);

    const favoritesPlaylist = useMemo<YouTubePlaylist | null>(() => {
        if (favoritedVideoIds.size === 0) {
            return null;
        }
        
        const allVideosMap = new Map<string, YouTubeVideo>();
        playlists.forEach(playlist => {
            playlist.videos.forEach(video => {
                if (!allVideosMap.has(video.id)) {
                    allVideosMap.set(video.id, video);
                }
            });
        });

        const favoriteVideos = Array.from(favoritedVideoIds)
            .filter((id): id is string => typeof id === 'string')
            .map(id => allVideosMap.get(id))
            .filter((v): v is YouTubeVideo => v !== undefined);

        if (favoriteVideos.length === 0) return null;

        return {
            id: 'favorites',
            title: '❤️ My Favorites',
            channelTitle: 'Your curated list',
            thumbnailUrl: favoriteVideos[0]?.thumbnailUrl || 'https://placehold.co/128x128/ef4444/white?text=❤️',
            videos: favoriteVideos,
        };
    }, [favoritedVideoIds, playlists]);

    const allPlaylists = useMemo(() => {
        return favoritesPlaylist ? [favoritesPlaylist, ...playlists] : playlists;
    }, [favoritesPlaylist, playlists]);

    const activePlaylist = useMemo(() => {
        return allPlaylists.find(p => p.id === activePlaylistId) || null;
    }, [allPlaylists, activePlaylistId]);
    
    const currentVideo = useMemo(() => {
        if (currentVideoIndex !== null && playbackQueue.length > 0) {
            return playbackQueue[currentVideoIndex];
        }
        return null;
    }, [playbackQueue, currentVideoIndex]);

    const handleSelectVideo = useCallback((video: YouTubeVideo, index: number) => {
        if (!activePlaylist) return;
        
        setActivePlaylistId(activePlaylist.id);
        setCurrentTime(0);

        if (isShuffleOn) {
            const others = activePlaylist.videos.filter(v => v.id !== video.id);
            const newShuffledList = [video, ...shuffleArray(others)];
            setPlaybackQueue(newShuffledList);
            setCurrentVideoIndex(0);
        } else {
            setPlaybackQueue(activePlaylist.videos);
            setCurrentVideoIndex(index);
        }
    }, [activePlaylist, isShuffleOn]);
    
    const handleSelectFromSearch = useCallback((video: YouTubeVideo) => {
        let foundPlaylist: YouTubePlaylist | null = null;
        let foundIndex: number = -1;

        for (const playlist of allPlaylists) {
            const index = playlist.videos.findIndex(v => v.id === video.id);
            if (index !== -1) {
                foundPlaylist = playlist;
                foundIndex = index;
                break;
            }
        }

        if (foundPlaylist && foundIndex !== -1) {
            setActivePlaylistId(foundPlaylist.id);
            setCurrentTime(0);
            
            if (isShuffleOn) {
                const others = foundPlaylist.videos.filter(v => v.id !== video.id);
                setPlaybackQueue([video, ...shuffleArray(others)]);
                setCurrentVideoIndex(0);
            } else {
                setPlaybackQueue(foundPlaylist.videos);
                setCurrentVideoIndex(foundIndex);
            }

            setSearchQuery('');
        }
    }, [allPlaylists, isShuffleOn]);

    const handleNextVideo = useCallback(() => {
        if (playbackQueue.length > 0 && currentVideoIndex !== null) {
            const nextIndex = (currentVideoIndex + 1) % playbackQueue.length;
            setCurrentVideoIndex(nextIndex);
            setCurrentTime(0);
        }
    }, [playbackQueue, currentVideoIndex]);

    const handlePrevVideo = useCallback(() => {
        if (playbackQueue.length > 0 && currentVideoIndex !== null) {
            const prevIndex = (currentVideoIndex - 1 + playbackQueue.length) % playbackQueue.length;
            setCurrentVideoIndex(prevIndex);
            setCurrentTime(0);
        }
    }, [playbackQueue, currentVideoIndex]);

    const handleToggleShuffle = useCallback(() => {
        setIsShuffleOn(prevIsShuffleOn => {
            const isTurningOn = !prevIsShuffleOn;
            if (!activePlaylist || currentVideoIndex === null) {
                return isTurningOn;
            }

            const current = playbackQueue[currentVideoIndex];

            if (isTurningOn) {
                const others = playbackQueue.filter(v => v.id !== current.id);
                const newShuffledList = [current, ...shuffleArray(others)];
                setPlaybackQueue(newShuffledList);
                setCurrentVideoIndex(0);
            } else { // Turning shuffle off
                setPlaybackQueue(activePlaylist.videos);
                const originalIndex = activePlaylist.videos.findIndex(v => v.id === current.id);
                setCurrentVideoIndex(originalIndex !== -1 ? originalIndex : 0);
            }
            return isTurningOn;
        });
    }, [activePlaylist, playbackQueue, currentVideoIndex]);
    
    const handleToggleRepeat = useCallback(() => {
        setRepeatMode(prev => {
            if (prev === 'none') return 'playlist';
            if (prev === 'playlist') return 'one';
            return 'none';
        });
    }, []);

    const handleSelectPlaylist = (playlistId: string) => {
        setActivePlaylistId(playlistId);
        setCurrentVideoIndex(null); 
        setPlaybackQueue([]);
    };
    
    const handleAddToQueue = useCallback((video: YouTubeVideo) => {
        setPlaybackQueue(prev => {
            if (prev.length === 0) {
                setCurrentVideoIndex(0);
                return [video];
            }
            return [...prev, video];
        });
    }, []);

    const handlePlayNext = useCallback((video: YouTubeVideo) => {
        setPlaybackQueue(prev => {
            if (prev.length === 0 || currentVideoIndex === null) {
                setCurrentVideoIndex(0);
                return [video];
            }
            const newQueue = [...prev];
            newQueue.splice(currentVideoIndex + 1, 0, video);
            return newQueue;
        });
    }, [currentVideoIndex]);

    const handleRemoveFromQueue = useCallback((indexToRemove: number) => {
        if (currentVideoIndex === null) return;

        const removedVideoId = playbackQueue[indexToRemove].id;

        setPlaybackQueue(prevQueue => {
            const newQueue = prevQueue.filter((_, i) => i !== indexToRemove);
            
            if (indexToRemove === currentVideoIndex) {
                if (newQueue.length === 0) {
                    setCurrentVideoIndex(null);
                } else {
                    const newIndex = Math.min(indexToRemove, newQueue.length - 1);
                    setCurrentVideoIndex(newIndex);
                }
            } else if (indexToRemove < currentVideoIndex) {
                setCurrentVideoIndex(prevIndex => (prevIndex !== null ? prevIndex - 1 : null));
            }

            return newQueue;
        });
    }, [currentVideoIndex, playbackQueue]);

    const handleReorderQueue = useCallback((startIndex: number, endIndex: number) => {
        if (startIndex === endIndex) return;

        setPlaybackQueue(prevQueue => {
            const newQueue = [...prevQueue];
            const [removed] = newQueue.splice(startIndex, 1);
            newQueue.splice(endIndex, 0, removed);
            
            if (currentVideoIndex !== null) {
                if (currentVideoIndex === startIndex) {
                    setCurrentVideoIndex(endIndex);
                } else if (startIndex < currentVideoIndex && endIndex >= currentVideoIndex) {
                    setCurrentVideoIndex(currentVideoIndex - 1);
                } else if (startIndex > currentVideoIndex && endIndex <= currentVideoIndex) {
                    setCurrentVideoIndex(currentVideoIndex + 1);
                }
            }
            return newQueue;
        });
        setIsShuffleOn(false);
    }, [currentVideoIndex]);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                if (isLyricsModalOpen) setIsLyricsModalOpen(false);
                else if (isQueueOpen) setIsQueueOpen(false);
                else if (searchQuery) setSearchQuery('');
                return;
            }
            
            const target = event.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
            if (isLyricsModalOpen) return;
            if (!currentVideo) return;

            switch (event.code) {
                case 'Space': event.preventDefault(); playerRef.current?.togglePlayPause(); break;
                case 'ArrowRight': event.preventDefault(); handleNextVideo(); break;
                case 'ArrowLeft': event.preventDefault(); handlePrevVideo(); break;
                case 'ArrowUp': event.preventDefault(); setVolume(v => Math.min(100, v + 5)); break;
                case 'ArrowDown': event.preventDefault(); setVolume(v => Math.max(0, v - 5)); break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentVideo, handleNextVideo, handlePrevVideo, isLyricsModalOpen, isQueueOpen, searchQuery]);
    
    const isLastVideo = currentVideoIndex !== null && currentVideoIndex === playbackQueue.length - 1;

    return (
        <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
            <header className="flex-shrink-0 bg-gray-800/50 backdrop-blur-sm p-3 flex items-center justify-between shadow-lg z-20">
                <div className="flex items-center gap-3 flex-shrink-0">
                   <button 
                       onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                       className="p-2 rounded-full hover:bg-gray-700 transition-colors mr-2"
                       aria-label="Toggle playlists sidebar"
                   >
                       <MenuIcon />
                   </button>
                   <div className="flex items-center gap-3">
                      <MusicNoteIcon />
                      <div>
                           <h1 className="text-xl font-bold text-teal-400 tracking-wider">Sanjit Melody Studio</h1>
                           <p className="text-xs text-teal-200/70 -mt-1">The Sound of Heart</p>
                      </div>
                   </div>
                </div>

                <div className="flex-grow flex justify-center px-4">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </span>
                        <input
                            type="search"
                            placeholder="Search songs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                            aria-label="Search for songs in playlists"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                aria-label="Clear search"
                            >
                                <CloseIcon className="h-5 w-5 text-gray-400 hover:text-white" />
                            </button>
                        )}
                    </div>
                </div>
                
                 <div className="flex items-center gap-3 flex-shrink-0">
                    <button 
                       onClick={() => setIsQueueOpen(!isQueueOpen)} 
                       className={`p-2 rounded-full transition-colors ${isQueueOpen ? 'bg-teal-500/20 text-teal-300' : 'hover:bg-gray-700'}`}
                       aria-label="Toggle playback queue"
                   >
                       <QueueListIcon />
                   </button>
                </div>
            </header>

            <div className="flex flex-grow overflow-hidden relative">
                <aside 
                    className={`flex-shrink-0 bg-gray-900 transition-all duration-300 ease-in-out overflow-y-auto ${isSidebarOpen ? 'w-64 p-4' : 'w-0'}`}
                >
                    {isSidebarOpen && allPlaylists.length > 0 && (
                        <PlaylistList 
                            playlists={allPlaylists}
                            activePlaylistId={activePlaylistId}
                            onSelectPlaylist={handleSelectPlaylist}
                        />
                    )}
                </aside>
                
                <main className={`flex-grow p-4 md:p-6 overflow-y-auto transition-all duration-300 ease-in-out ${isQueueOpen ? 'pr-80' : ''}`} style={{ paddingBottom: '100px' }}>
                   {searchQuery.trim() ? (
                        <SearchResultsList
                            query={searchQuery}
                            results={searchResults}
                            onSelectVideo={handleSelectFromSearch}
                            currentVideoId={currentVideo?.id}
                            favoritedVideoIds={favoritedVideoIds}
                            onToggleFavorite={handleToggleFavorite}
                            onAddToQueue={handleAddToQueue}
                            onPlayNext={handlePlayNext}
                        />
                   ) : activePlaylist ? (
                       <VideoList 
                           playlist={activePlaylist}
                           onSelectVideo={handleSelectVideo}
                           currentVideoId={currentVideo?.id}
                           currentVideoIndex={currentVideoIndex}
                           favoritedVideoIds={favoritedVideoIds}
                           onToggleFavorite={handleToggleFavorite}
                           onAddToQueue={handleAddToQueue}
                           onPlayNext={handlePlayNext}
                       />
                   ) : (
                       <div className="flex items-center justify-center h-full">
                           <p className="text-gray-400">Select a playlist to start.</p>
                       </div>
                   )}
                </main>
                
                <QueuePanel
                    isOpen={isQueueOpen}
                    onClose={() => setIsQueueOpen(false)}
                    queue={playbackQueue}
                    currentVideoIndex={currentVideoIndex}
                    onRemove={handleRemoveFromQueue}
                    onReorder={handleReorderQueue}
                    onSelectVideo={(video, index) => setCurrentVideoIndex(index)}
                />

            </div>
            
            {currentVideo && (
                <footer className="fixed bottom-0 left-0 right-0 z-30">
                    <Player
                        ref={playerRef}
                        video={currentVideo}
                        onNext={handleNextVideo}
                        onPrev={handlePrevVideo}
                        isFavorited={favoritedVideoIds.has(currentVideo.id)}
                        onToggleFavorite={handleToggleFavorite}
                        volume={volume}
                        onVolumeChange={setVolume}
                        isShuffleOn={isShuffleOn}
                        onToggleShuffle={handleToggleShuffle}
                        repeatMode={repeatMode}
                        onToggleRepeat={handleToggleRepeat}
                        isLastVideo={isLastVideo}
                        onToggleLyrics={() => setIsLyricsModalOpen(true)}
                        onTimeUpdate={setCurrentTime}
                    />
                </footer>
            )}
            
            {currentVideo && isLyricsModalOpen && (
                <LyricsModal
                    video={currentVideo}
                    isOpen={isLyricsModalOpen}
                    onClose={() => setIsLyricsModalOpen(false)}
                    currentTime={currentTime}
                />
            )}
        </div>
    );
};

export default App;