
export interface LyricLine {
  time: number; // in seconds
  text: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  duration?: string;
  lyrics?: string | LyricLine[];
  uploadDate?: string;
  viewCount?: string;
  likeCount?: string;
}

export interface YouTubePlaylist {
  id: string;
  title:string;
  thumbnailUrl: string;
  channelTitle: string;
  videos: YouTubeVideo[];
}

// For exposing player controls via a ref
export interface PlayerControls {
  togglePlayPause: () => void;
}


// Basic types for the YouTube IFrame Player API
// This avoids needing to install @types/youtube
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  loadVideoById: (videoId: string) => void;
  getVolume: () => number;
  setVolume: (volume: number) => void;
  getPlayerState: () => PlayerState;
  getCurrentTime: () => number;
  // FIX: Add missing getDuration method to the YTPlayer interface.
  getDuration: () => number;
  destroy: () => void;
  getIframe: () => HTMLIFrameElement;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
}

export enum PlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5,
}