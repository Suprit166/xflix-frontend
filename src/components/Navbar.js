import React, { useState } from "react";

const Navbar = ({ onFilterChange }) => {
  const [genre, setGenre] = useState("");
  const [contentRating, setContentRating] = useState("");

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    onFilterChange({ genre: e.target.value, contentRating });
  };

  const handleContentRatingChange = (e) => {
    setContentRating(e.target.value);
    onFilterChange({ genre, contentRating: e.target.value });
  };

  return (
    <nav className="navbar">
      <div className="filter">
        <label>
          Genre:
          <select value={genre} onChange={handleGenreChange}>
            <option value="">All</option>
            <option value="Movies">Movies</option>
            <option value="Documentary">Documentary</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            {/* Add more genres as needed */}
          </select>
        </label>
        <label>
          Content Rating:
          <select value={contentRating} onChange={handleContentRatingChange}>
            <option value="">All</option>
            <option value="7+">7+</option>
            <option value="12+">12+</option>
            <option value="16+">16+</option>
            <option value="18+">18+</option>
            {/* Add more ratings as needed */}
          </select>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
