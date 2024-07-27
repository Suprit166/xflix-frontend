import React, { useState } from "react";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./styles.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchVideos = (query) => {
    fetch(`http://13.234.10.181:8082//v1/videos?query=${query}`)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error:", error));
  };

  const selectVideo = (videoId) => {
    fetch(`http://13.234.10.181:8082//v1/videos/${videoId}`)
      .then((response) => response.json())
      .then((data) => setSelectedVideo(data))
      .catch((error) => console.error("Error:", error));
  };

  const voteVideo = (voteType) => {
    const voteBody = voteType === "upVote" ? { upVotes: 1 } : { downVotes: 1 };
    fetch(`http://13.234.10.181:8082//v1/videos/${selectedVideo._id}/votes`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteBody),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`${voteType} cast successfully!`);
        selectVideo(selectedVideo._id);
      })
      .catch((error) => console.error("Error:", error));
  };

  const viewVideo = () => {
    fetch(`http://13.234.10.181:8082//v1/videos/${selectedVideo._id}/views`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ viewCount: 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("View updated successfully!");
        selectVideo(selectedVideo._id);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <header>
        <h1>Video Streaming Site</h1>
      </header>
      <Search onSearch={searchVideos} />
      <VideoList videos={videos} onSelectVideo={selectVideo} />
      <VideoDetail
        video={selectedVideo}
        onVote={voteVideo}
        onView={viewVideo}
      />
    </div>
  );
};

export default App;
