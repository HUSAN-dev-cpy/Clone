import React from 'react';

export default function VideoCard({ title, channel, views, time, thumbnail, avatar }) {
  return (
    <div className="flex flex-col gap-2 cursor-pointer group">
      <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex gap-3 px-1">
        <div className="w-9 h-9 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
          <img 
            src={avatar} 
            alt={channel} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 leading-tight">
            {title}
          </h3>
          <span className="text-xs text-gray-600 mt-1 hover:text-gray-900">
            {channel}
          </span>
          <span className="text-xs text-gray-600">
            {views} • {time}
          </span>
        </div>
      </div>
    </div>
  );
}