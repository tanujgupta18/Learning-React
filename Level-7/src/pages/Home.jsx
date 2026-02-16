import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "daae545c";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
      );

      const data = await res.json();

      if (data.Response === "False") {
        setMovies([]);
        return;
      }

      setMovies(data.Search);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Movie..."
          className="p-2 text-white rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.length === 0 && search && <p>No movies found.</p>}

        {movies.map((movie, index) => (
          <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
