import React from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 h-14 bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-red-600 text-white p-1 rounded-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tighter text-gray-900">YouTube</span>
        </div>
      </div>

      <div className="flex items-center flex-1 max-w-2xl mx-10">
        <div className="flex items-center w-full border border-gray-300 rounded-l-full px-4 py-2 focus-within:border-blue-500 shadow-inner">
          <input 
            type="text" 
            placeholder="Qidirish" 
            className="w-full outline-none text-gray-800 bg-transparent text-sm"
          />
        </div>
        <button className="bg-gray-100 border border-l-0 border-gray-300 px-6 py-2 rounded-r-full hover:bg-gray-200 cursor-pointer">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="p-2.5 ml-3 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer hidden sm:block">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer hidden sm:block">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium text-sm cursor-pointer">
          H
        </div>
      </div>
    </header>
  );
}