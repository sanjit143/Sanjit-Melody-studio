
import React from 'react';
import type { YouTubePlaylist } from '../types';

interface PlaylistListProps {
  playlists: YouTubePlaylist[];
  activePlaylistId: string | null;
  onSelectPlaylist: (playlistId: string) => void;
}

const PlaylistList: React.FC<PlaylistListProps> = ({ playlists, activePlaylistId, onSelectPlaylist }) => {
  return (
    <nav>
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <button
              onClick={() => onSelectPlaylist(playlist.id)}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-4 transition-colors duration-200 ${
                activePlaylistId === playlist.id
                  ? 'bg-teal-500/20 text-teal-300'
                  : 'hover:bg-gray-800'
              }`}
            >
              <img 
                src={playlist.thumbnailUrl} 
                alt={playlist.title} 
                className="w-12 h-12 rounded-md object-cover flex-shrink-0"
              />
              <div className="overflow-hidden">
                <p className="font-semibold truncate text-white">{playlist.title}</p>
                <p className="text-xs text-gray-400 truncate">{playlist.channelTitle}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PlaylistList;
