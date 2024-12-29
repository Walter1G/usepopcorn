import React from "react";
import { useState } from "react";

import WatchedList from "./WatchedList";
import MoviesList from "./MoviesList";

const MainPage = ({ movies, watched }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && <MoviesList movies={movies} />}
      </div>

      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <WatchedList watched={watched} />
          </>
        )}
      </div>
    </main>
  );
};

export default MainPage;
