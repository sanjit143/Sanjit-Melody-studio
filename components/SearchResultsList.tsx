import React from 'react';
import type { YouTubeVideo } from '../types';
import { PlayIcon, HeartIcon, SearchIcon, EyeIcon, ThumbsUpIcon, AddToQueueIcon, PlusIcon } from './icons';

interface SearchResultsListProps {
  query: string;
  results: YouTubeVideo[];
  onSelectVideo: (video: YouTubeVideo) => void;
  favoritedVideoIds: Set<string>;
  onToggleFavorite: (videoId: string) => void;
  currentVideoId?: string;
  onAddToQueue: (video: YouTubeVideo) => void;
  onPlayNext: (video: YouTubeVideo) => void;
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ query, results, onSelectVideo, favoritedVideoIds, onToggleFavorite, currentVideoId, onAddToQueue, onPlayNext }) => {
  if (!query) return null;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-white">
        Search results for "{query}"
      </h1>
      
      {results.length > 0 ? (
        <div className="space-y-2">
          {results.map((video, index) => {
            const isPlaying = currentVideoId === video.id;
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
                <button onClick={() => onSelectVideo(video)} className="relative flex-shrink-0">
                    <img 
                        src={video.thumbnailUrl} 
                        alt={video.title} 
                        className="w-16 h-10 rounded-md object-cover"
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon className="h-6 w-6 text-white"/>
                    </div>
                </button>
                <div onClick={() => onSelectVideo(video)} className="flex-grow overflow-hidden cursor-pointer">
                  <p className={`font-semibold truncate ${isPlaying ? 'text-teal-300' : 'text-white'}`}>
                    {video.title}
                  </p>
                  <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-sm text-gray-400 mt-1">
                      <p className="truncate">{video.channelTitle}</p>
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
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
            <SearchIcon className="h-16 w-16 text-gray-500 mb-4" />
            <p className="text-xl font-semibold">No songs found</p>
            <p>Try a different search term to find your favorite music.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;