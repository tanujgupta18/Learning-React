import React, { useEffect, useState } from "react";

const Weather = () => {
  const API_KEY = "6345b66e29c96b6eca539443aca99457";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      const data = await res.json();
      if (data.cod !== 200 && data.cod !== "200") {
        throw new Error(data.message);
      }
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter city..."
          className="p-2 rounded text-black w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-6">Loading...</p>}

      {error && <p className="mt-6 text-red-500">{error}</p>}

      {weather && (
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold">
            {weather.name}, {weather.sys.country}
          </h2>

          <p className="text-4xl mt-4">{Math.round(weather.main.temp)}°C</p>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <p className="mt-2 capitalize">{weather.weather[0].description}</p>

          <div className="mt-4 space-y-1 text-sm text-gray-300">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
