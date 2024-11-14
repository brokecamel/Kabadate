import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section py-4 mt-10">
      <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="Video">
        Match Magic
      </h1>
      <div className="video-container mt-6">
        <video width="100%" controls controlsList="nodownload">
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
