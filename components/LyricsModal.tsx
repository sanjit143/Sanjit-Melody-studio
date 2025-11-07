import React, { useEffect, useRef, useMemo } from 'react';
import type { YouTubeVideo } from '../types';
import { CloseIcon } from './icons';

interface LyricsModalProps {
    video: YouTubeVideo;
    isOpen: boolean;
    onClose: () => void;
    currentTime: number;
}

const LyricsModal: React.FC<LyricsModalProps> = ({ video, isOpen, onClose, currentTime }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const lyricsContainerRef = useRef<HTMLElement>(null);
    const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    const hasTimedLyrics = useMemo(() => Array.isArray(video.lyrics), [video.lyrics]);

    const currentLyricIndex = useMemo(() => {
        if (!hasTimedLyrics || !Array.isArray(video.lyrics)) {
            return -1;
        }
        
        let activeIndex = -1;
        for (let i = 0; i < video.lyrics.length; i++) {
            if (currentTime >= video.lyrics[i].time) {
                activeIndex = i;
            } else {
                break;
            }
        }
        return activeIndex;

    }, [currentTime, video.lyrics, hasTimedLyrics]);

    useEffect(() => {
        if (isOpen && currentLyricIndex !== -1) {
            const activeLine = lineRefs.current[currentLyricIndex];
            if (activeLine && lyricsContainerRef.current) {
                activeLine.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
    }, [currentLyricIndex, isOpen]);


    // Close modal on escape key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // Trap focus within the modal
    useEffect(() => {
        if (isOpen && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            };
            
            firstElement?.focus();
            document.addEventListener('keydown', handleTabKey);

            return () => {
                document.removeEventListener('keydown', handleTabKey);
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lyrics-heading"
        >
            <div
                ref={modalRef}
                className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl h-[80vh] max-h-[700px] flex flex-col overflow-hidden transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                <header className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
                    <h2 id="lyrics-heading" className="text-lg font-bold text-white truncate">
                        Lyrics for "{video.title}"
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
                        aria-label="Close lyrics"
                    >
                        <CloseIcon />
                    </button>
                </header>
                <main ref={lyricsContainerRef} className="p-6 overflow-y-auto text-gray-300 leading-relaxed text-center">
                    {hasTimedLyrics && Array.isArray(video.lyrics) ? (
                        <div className="flex flex-col gap-4">
                            {video.lyrics.map((line, index) => (
                                <p
                                    key={`${line.time}-${index}`}
                                    // FIX: A ref callback should not return a value. Using a block body for the arrow function fixes the implicit return.
                                    ref={(el) => { lineRefs.current[index] = el; }}
                                    className={`font-sans text-lg transition-all duration-300 ease-in-out ${
                                        index === currentLyricIndex
                                            ? 'text-teal-300 font-bold scale-105'
                                            : 'text-gray-400 scale-100'
                                    }`}
                                >
                                    {line.text || <>&nbsp;</>}
                                </p>
                            ))}
                        </div>
                    ) : (
                         <pre className="whitespace-pre-wrap font-sans text-base text-left">{typeof video.lyrics === 'string' ? video.lyrics : 'Lyrics not available for this song.'}</pre>
                    )}
                </main>
            </div>
            <style>{`
                @keyframes fade-in-scale {
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default LyricsModal;
