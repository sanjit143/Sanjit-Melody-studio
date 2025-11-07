import React from 'react';
import type { YouTubePlaylist, YouTubeVideo } from '../types';
import { PlayIcon, SoundWaveIcon, HeartIcon, EyeIcon, ThumbsUpIcon, PlusIcon, AddToQueueIcon } from './icons';

interface VideoListProps {
  playlist: YouTubePlaylist;
  onSelectVideo: (video: YouTubeVideo, index: number) => void;
  currentVideoId: string | undefined;
  currentVideoIndex: number | null;
  favoritedVideoIds: Set<string>;
  onToggleFavorite: (videoId: string) => void;
  onAddToQueue: (video: YouTubeVideo) => void;
  onPlayNext: (video: YouTubeVideo) => void;
}

const VideoList: React.FC<VideoListProps> = ({ playlist, onSelectVideo, currentVideoId, currentVideoIndex, favoritedVideoIds, onToggleFavorite, onAddToQueue, onPlayNext }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <img 
            src={playlist.thumbnailUrl} 
            alt={playlist.title} 
            className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-2xl object-cover flex-shrink-0"
        />
        <div className="flex-grow">
            <h2 className="text-gray-400 text-sm font-bold uppercase">{playlist.id === 'favorites' ? 'Your Collection' : 'Playlist'}</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">{playlist.title}</h1>
            <p className="text-gray-300 mt-2">{playlist.channelTitle}</p>
            {playlist.videos.length > 0 && (
                 <button
                    onClick={() => onSelectVideo(playlist.videos[0], 0)}
                    className="mt-4 flex items-center gap-2 bg-teal-500 text-black font-bold py-3 px-6 rounded-full hover:bg-teal-400 transition-transform hover:scale-105 shadow-lg"
                    aria-label={`Play all songs in ${playlist.title}`}
                >
                    <PlayIcon className="h-6 w-6" />
                    <span>Play All</span>
                </button>
            )}
        </div>
      </div>
      
      <div className="space-y-2">
        {playlist.videos.map((video, index) => {
          const isPlaying = currentVideoId === video.id;
          const isUpNext = currentVideoIndex !== null && index === (currentVideoIndex + 1) % playlist.videos.length;
          const isFavorited = favoritedVideoIds.has(video.id);

          return (
            <div
              key={video.id}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-4 transition-all duration-200 group animate-fadeInUp ${
                isPlaying
                  ? 'bg-teal-500/20'
                  : 'hover:bg-gray-800/60'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button onClick={() => onSelectVideo(video, index)} className="relative flex-shrink-0">
                  <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-16 h-10 rounded-md object-cover"
                  />
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayIcon className="h-6 w-6 text-white"/>
                  </div>
              </button>
              <div onClick={() => onSelectVideo(video, index)} className="flex-grow overflow-hidden cursor-pointer">
                <p className={`font-semibold truncate flex items-center ${isPlaying ? 'text-teal-300' : 'text-white'}`}>
                  {isPlaying && <SoundWaveIcon className="h-4 w-4 mr-2 flex-shrink-0" />}
                  {video.title}
                </p>
                <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-sm text-gray-400 mt-1">
                  <p className="truncate">{video.channelTitle}</p>
                  {isUpNext && !isPlaying && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full animate-badgePopIn">
                          Up Next
                      </span>
                  )}
                  {video.viewCount && (
                      <span className="flex items-center gap-1 text-xs">
                          <EyeIcon className="h-4 w-4 text-gray-500" />
                          {video.viewCount}
                      </span>
                  )}
                  {video.likeCount && (
                      <span className="flex items-center gap-1 text-xs">
                          <ThumbsUpIcon className="h-4 w-4 text-gray-500" />
                          {video.likeCount}
                      </span>
                  )}
                  {video.uploadDate && (
                      <span className="hidden sm:flex items-center gap-1 text-xs">
                          {video.uploadDate}
                      </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button
                      onClick={(e) => { e.stopPropagation(); onPlayNext(video); }}
                      className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                      aria-label="Play next"
                      title="Play next"
                  >
                      <AddToQueueIcon />
                  </button>
                  <button
                      onClick={(e) => { e.stopPropagation(); onAddToQueue(video); }}
                      className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                      aria-label="Add to queue"
                      title="Add to queue"
                  >
                      <PlusIcon />
                  </button>
              </div>

              {video.duration && (
                <span className="text-sm text-gray-400 font-mono ml-auto flex-shrink-0 group-hover:hidden">{video.duration}</span>
              )}
              <button
                  onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(video.id);
                  }}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors flex-shrink-0"
                  aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
              >
                  <HeartIcon filled={isFavorited} className={`h-5 w-5 ${isFavorited ? 'text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default VideoList;