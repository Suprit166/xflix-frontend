// import React, { useState, useEffect } from "react";
// import Search from "./components/Search";
// import VideoList from "./components/VideoList";
// import VideoDetail from "./components/VideoDetail";
// import Navbar from "./components/Navbar";
// import "./styles.css";

// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const searchVideos = (query) => {
//     fetch(
//       `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos?query=${query}`
//     )
//       .then((response) => response.json())
//       .then((data) => setVideos(data.videos))
//       .catch((error) => console.error("Error:", error));
//   };

//   useEffect(() => {
//     // Fetch all videos on initial render
//     fetch(
//       `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos`
//     )
//       .then((response) => response.json())
//       .then((data) => setVideos(data.videos))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   const selectVideo = (videoId) => {
//     fetch(
//       `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos/${videoId}`
//     )
//       .then((response) => response.json())
//       .then((data) => setSelectedVideo(data))
//       .catch((error) => console.error("Error:", error));
//   };

//   return (
//     <div>
//       <header>
//         <h1>Video Streaming Site</h1>
//       </header>
//       <Search onSearch={searchVideos} />
//       <VideoList videos={videos} onSelectVideo={selectVideo} />
//       {selectedVideo && <VideoDetail video={selectedVideo} />}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState({ genre: "", contentRating: "" });

  //Fetch all videos on initial render
  useEffect(() => {
    // Fetch all videos on initial render
    fetch(
      `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.videos))
      .catch((error) => console.error("Error:", error));
  }, []);

  // Fetch videos based on filters
  const fetchVideos = (query = "") => {
    let url = `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos?query=${query}`;
    if (filter.genre) url += `&genre=${filter.genre}`;
    if (filter.contentRating) url += `&contentRating=${filter.contentRating}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data.videos || [])) // Ensure fallback to empty array
      .catch((error) => console.error("Error:", error));
  };

  // Fetch all videos on initial render
  // useEffect(() => {
  //   // Fetch all videos on initial render
  //   fetch(
  //     `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setVideos(data.videos))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // Fetch videos whenever filters change
  useEffect(() => {
    fetchVideos();
  }, [filter]);

  const selectVideo = (videoId) => {
    fetch(
      `https://supritkeni-me-buildout-xflix-node-master.onrender.com/v1/videos/${videoId}`
    )
      .then((response) => response.json())
      .then((data) => setSelectedVideo(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <header>
        <h1>Video Streaming Site</h1>
      </header>
      <Navbar onFilterChange={handleFilterChange} />
      <Search onSearch={fetchVideos} />
      <VideoList videos={videos} onSelectVideo={selectVideo} />
      {selectedVideo && <VideoDetail video={selectedVideo} />}
    </div>
  );
};

export default App;
