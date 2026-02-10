
import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  return (
    <div className="w-full mt-8">
      <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#111] shadow-2xl bg-black">
        <iframe
          className="w-full h-full"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4 flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold px-2">
        <Play className="w-3 h-3 text-amber-500" />
        <span>Vídeo Demonstrativo: {title}</span>
      </div>
    </div>
  );
};

export default VideoPlayer;
