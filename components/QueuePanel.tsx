import React, { useRef } from 'react';
import type { YouTubeVideo } from '../types';
import { CloseIcon, SoundWaveIcon, TrashIcon } from './icons';

interface QueuePanelProps {
    isOpen: boolean;
    onClose: () => void;
    queue: YouTubeVideo[];
    currentVideoIndex: number | null;
    onRemove: (index: number) => void;
    onReorder: (startIndex: number, endIndex: number) => void;
    onSelectVideo: (video: YouTubeVideo, index: number) => void;
}

const QueuePanel: React.FC<QueuePanelProps> = ({ isOpen, onClose, queue, currentVideoIndex, onRemove, onReorder, onSelectVideo }) => {
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        dragItem.current = index;
        e.dataTransfer.effectAllowed = 'move';
    };
    
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        dragOverItem.current = index;
    };
    
    const handleDragEnd = () => {
        if (dragItem.current !== null && dragOverItem.current !== null) {
            onReorder(dragItem.current, dragOverItem.current);
        }
        dragItem.current = null;
        dragOverItem.current = null;
    };

    if (!isOpen) return null;

    return (
        <aside 
            className={`absolute top-0 right-0 h-full w-80 bg-gray-800/90 backdrop-blur-md shadow-2xl z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="queue-heading"
        >
            <div className="flex flex-col h-full">
                <header className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
                    <h2 id="queue-heading" className="text-lg font-bold text-white">Up Next</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
                        aria-label="Close queue"
                    >
                        <CloseIcon />
                    </button>
                </header>
                <div className="p-2 overflow-y-auto flex-grow" onDragOver={e => e.preventDefault()}>
                    {queue.length > 0 ? (
                        <div className="space-y-2">
                            {queue.map((video, index) => {
                                const isPlaying = currentVideoIndex === index;
                                return (
                                    <div
                                        key={`${video.id}-${index}`}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, index)}
                                        onDragEnter={(e) => handleDragEnter(e, index)}
                                        onDragEnd={handleDragEnd}
                                        className={`w-full p-2 rounded-lg flex items-center gap-3 transition-all duration-200 group cursor-grab ${
                                            isPlaying ? 'bg-teal-500/20' : 'hover:bg-gray-700/60'
                                        }`}
                                    >
                                        <div onClick={() => onSelectVideo(video, index)} className="flex-grow flex items-center gap-3 overflow-hidden">
                                            <img 
                                                src={video.thumbnailUrl} 
                                                alt={video.title} 
                                                className="w-12 h-8 rounded-md object-cover flex-shrink-0"
                                            />
                                            <div className="flex-grow overflow-hidden">
                                                <p className={`font-semibold truncate text-sm ${isPlaying ? 'text-teal-300' : 'text-white'}`}>
                                                    {video.title}
                                                </p>
                                                <p className="text-xs text-gray-400 truncate">{video.channelTitle}</p>
                                            </div>
                                        </div>
                                        {isPlaying && <SoundWaveIcon className="h-4 w-4 mr-2 flex-shrink-0" />}
                                        <button
                                            onClick={() => onRemove(index)}
                                            className="p-1 rounded-full text-gray-400 hover:bg-gray-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                                            aria-label="Remove from queue"
                                        >
                                            <TrashIcon />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-center text-gray-400">
                            <p>Queue is empty.</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default QueuePanel;