import React from "react";

const VideoDetail = ({ video, onVote, onView }) => {
  if (!video) return <div>Select a video to see details</div>;

  return (
    <div>
      <h3>{video.title}</h3>
      <iframe
        width="560"
        height="315"
        src={`https://${video.videoLink}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{video.description}</p>
      <img src={video.previewImage} alt="preview" />
      <p>Content Rating: {video.contentRating}</p>
      <p>Genre: {video.genre}</p>
      <p>Release Date: {video.releaseDate}</p>
      <p>Views: {video.viewCount}</p>
      <p>
        Upvotes: {video.votes.upVotes} | Downvotes: {video.votes.downVotes}
      </p>
      <button onClick={() => onVote("upVote")}>Upvote</button>
      <button onClick={() => onVote("downVote")}>Downvote</button>
      <button onClick={onView}>View</button>
    </div>
  );
};

export default VideoDetail;
