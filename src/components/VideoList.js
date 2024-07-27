import React from "react";

const VideoList = ({ videos, onSelectVideo }) => {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video._id} onClick={() => onSelectVideo(video._id)}>
          <img src={video.previewImage} alt="preview" />
          {video.title}
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
