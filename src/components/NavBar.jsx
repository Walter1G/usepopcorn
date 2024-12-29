import React from "react";
import { useState } from "react";
import NumList from "../components/NumList";

const NavBar = ({movies}) => {
  const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <NumList movies={movies} />
    </nav>
  );
};

export default NavBar;
