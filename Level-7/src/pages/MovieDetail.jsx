import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const API_KEY = "daae545c";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
        );

        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!movie || movie.Response === "False") {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-blue-500 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{movie.Title}</h1>

          <p className="text-gray-400 mt-2">
            {movie.Year} • {movie.Runtime} • {movie.Genre}
          </p>

          <p className="mt-4 text-lg leading-relaxed">{movie.Plot}</p>

          <div className="mt-6 space-y-2">
            <p>
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
            <p>
              <span className="font-semibold">Actors:</span> {movie.Actors}
            </p>
            <p>
              <span className="font-semibold">Language:</span> {movie.Language}
            </p>
            <p>
              <span className="font-semibold">Box Office:</span>{" "}
              {movie.BoxOffice}
            </p>
          </div>

          <div className="mt-6 text-yellow-400 text-xl">
            ⭐ IMDb Rating: {movie.imdbRating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
