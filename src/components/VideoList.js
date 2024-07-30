import React from "react";
import PropTypes from "prop-types";

const VideoList = ({ videos, onSelectVideo }) => {
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p>No videos available</p>;
  }

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div
          className="video-card"
          key={video._id}
          onClick={() => onSelectVideo(video._id)}
        >
          <img
            src={video.previewImage}
            alt={video.title}
            className="video-image"
          />
          <div className="video-details">
            <h3>{video.title}</h3>
            <p>Content Rating: {video.contentRating}</p>
            <p>Genre: {video.genre}</p>
            <p>Release Date: {video.releaseDate}</p>
            <p>Views: {video.viewCount}</p>
            <p>
              Upvotes: {video.votes.upVotes} | Downvotes:{" "}
              {video.votes.downVotes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onSelectVideo: PropTypes.func.isRequired,
};

export default VideoList;
