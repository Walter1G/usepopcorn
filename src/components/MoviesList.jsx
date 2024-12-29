import React from "react";
import MovieItem from "./MovieItem";


const MoviesList = ({ movies }) => {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
