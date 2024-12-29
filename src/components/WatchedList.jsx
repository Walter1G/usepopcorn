import React from "react";
import MovieSummary from "./MovieSummary";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched }) => {
  return (
    <>
      <MovieSummary watched={watched} />

      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </>
  );
};

export default WatchedList;
