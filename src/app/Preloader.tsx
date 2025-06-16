'use client';

import { useEffect, useRef } from 'react';
import './Preloader.css'; // Style to cover screen

export default function Preloader({ onFinish }: { onFinish: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleEnded = () => onFinish();
            video.addEventListener('ended', handleEnded);
            return () => video.removeEventListener('ended', handleEnded);
        }
    }, [onFinish]);

    return (
        <div className="preloader">
            <video
                ref={videoRef}
                src="/BulbPreloader.mp4"
                autoPlay
                muted
                playsInline
                className="preloader-video"
            />
        </div>
    );
}