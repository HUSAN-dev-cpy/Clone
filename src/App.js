import React from "react";
import Navbar from "./components/Navbar";
import VideoGrid from "./components/VideoGrid";


function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;