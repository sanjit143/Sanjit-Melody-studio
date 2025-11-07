import React from 'react';

type IconProps = {
    className?: string;
};

export const PlayIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-3zm7.5 0a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-3z" clipRule="evenodd" />
    </svg>
);

export const NextIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l7.5 4.33c1.25.72 1.25 2.56 0 3.28l-7.5 4.33c-1.25.72-2.779-.217-2.779-1.643V5.653z" />
        <path d="M18.75 3.75a.75.75 0 00-.75.75v15a.75.75 0 001.5 0v-15a.75.75 0 00-.75-.75z" />
    </svg>
);

export const PrevIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.75 18.347c0 1.426-1.529 2.33-2.779 1.643l-7.5-4.33c-1.25-.72-1.25-2.56 0-3.28l7.5-4.33c1.25.72 2.779.217 2.779 1.643v10.654z" />
        <path d="M5.25 20.25a.75.75 0 00.75-.75v-15a.75.75 0 00-1.5 0v15a.75.75 0 00.75.75z" />
    </svg>
);

export const VolumeUpIcon: React.FC<IconProps> = ({ className = "h-6 w-6 text-gray-300" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.59-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.41l4.5 4.5c.975.945 2.59.276 2.59-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
      <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const MusicNoteIcon: React.FC<IconProps> = ({ className = "h-6 w-6 text-teal-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.6V11.25a.75.75 0 01-1.5 0V7.862l-6.148 2.459A2.25 2.25 0 0012 12.75v5.25a2.25 2.25 0 00-2.25 2.25A2.25 2.25 0 0012 22.5a2.25 2.25 0 002.25-2.25v-5.25a3.75 3.75 0 00-1.89-3.359l6.148-2.459A.75.75 0 0119.952 9V3.362l.16-.064a.75.75 0 01.79.753zM12 15a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75s.75-.336.75-.75v-5.25A.75.75 0 0012 15z" clipRule="evenodd" />
    </svg>
);

export const SoundWaveIcon: React.FC<IconProps> = ({ className = "h-4 w-4 text-teal-300" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="2" height="8">
            <animate attributeName="height" values="8;16;8" begin="0s" dur="1s" repeatCount="indefinite" />
            <animate attributeName="y" values="8;4;8" begin="0s" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="11" y="8" width="2" height="8">
            <animate attributeName="height" values="8;16;8" begin="0.2s" dur="1s" repeatCount="indefinite" />
            <animate attributeName="y" values="8;4;8" begin="0.2s" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="16" y="8" width="2" height="8">
            <animate attributeName="height" values="8;16;8" begin="0.4s" dur="1s" repeatCount="indefinite" />
            <animate attributeName="y" values="8;4;8" begin="0.4s" dur="1s" repeatCount="indefinite" />
        </rect>
    </svg>
);

export const HeartIcon: React.FC<IconProps & { filled?: boolean }> = ({ className = "h-6 w-6", filled = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const ShuffleIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691v4.992h-4.992m0 0l-3.181-3.183a8.25 8.25 0 0111.667 0l3.181 3.183" />
    </svg>
);

export const LyricsIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const RepeatIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 1l4 4-4 4"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 11 4-4-4-4"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 5H9.5a4.5 4.5 0 0 0 0 9H13"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h11.5a4.5 4.5 0 0 0 0-9H7"/>
    </svg>
);

export const RepeatOneIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 15V9a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 1l4 4-4 4"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 11 4-4-4-4"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 5H9.5a4.5 4.5 0 0 0 0 9H13"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h11.5a4.5 4.5 0 0 0 0-9H7"/>
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className = "h-4 w-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ThumbsUpIcon: React.FC<IconProps> = ({ className = "h-4 w-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.424 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M6.633 10.5l-1.07-1.07a.454.454 0 00-.639 0l-1.07 1.07H2.25a.75.75 0 00-.75.75v8.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-8.25a.75.75 0 00-.75-.75h-1.372z" />
    </svg>
);

export const QueueListIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.125 1.125 0 010 2.25H5.625a1.125 1.125 0 010-2.25z" />
    </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
);

export const AddToQueueIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h14.25M3 13.5h14.25M17.25 9v10.5M17.25 9l2.25 2.25M17.25 9l-2.25 2.25" />
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.58.22-2.365.468a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193v-.443A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
    </svg>
);