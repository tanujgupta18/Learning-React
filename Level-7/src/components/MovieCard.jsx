import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="bg-gray-800 p-4 rounded hover:scale-105 transition">
          <img
            className="w-full h-64 object-cover rounded"
            src={movie.Poster}
            alt={movie.Title}
          />
          <h2 className="mt-2 font-semibold">{movie.Title}</h2>
          <p className="text-sm text-gray-400">{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
