import React from 'react';
import VideoCard from './VideoCard';

export default function VideoGrid() {
  const videos = [
    {
      id: 1,
      title: "React JS to'liq kurs 2026 | Amaliy loyihalar bilan o'rganish",
      channel: "iTLive Academy",
      views: "45K ko'rish",
      time: "3 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Tailwind CSS darslari | Mukammal dizayn yaratish sirlari",
      channel: "Frontend Uz",
      views: "18K ko'rish",
      time: "1 hafta oldin",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "JavaScript Asinxron dasturlash: Async/Await va Promise to'liq tushuntirish",
      channel: "Code Uz",
      views: "32K ko'rish",
      time: "5 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Real Madrid vs Barcelona | Eng qiziqarli o'yin sharhi va tahlili",
      channel: "Futbol TV",
      views: "120K ko'rish",
      time: "1 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Node.js va Express yordamida backend yaratish",
      channel: "IT Time",
      views: "22K ko'rish",
      time: "4 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Minecraft yangi versiya sharhi va qiziqarli modlar",
      channel: "Gamer Uz",
      views: "85K ko'rish",
      time: "2 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=500&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map(video => (
          <VideoCard 
            key={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            thumbnail={video.thumbnail}
            avatar={video.avatar}
          />
        ))}
      </div>
    </main>
  );
}