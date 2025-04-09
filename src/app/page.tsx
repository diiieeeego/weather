"use client";

import { useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import WeatherDetails from "@/components/WeatherDetails";
import ForecastList from "@/components/ForecastList";
import { getWeatherData } from "@/utils/getWeather";
import { getForecastData } from "@/utils/getForecastData";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}
interface ForecastItem {
  dt: number; // UNIX timestamp for the forecast time
  main: {
    temp: number; // Temperature
    humidity: number; // Humidity percentage
    pressure: number; // Pressure in hPa
  };
  weather: {
    main: string; // Weather condition (e.g., "Clear", "Clouds")
    description: string; // Detailed description (e.g., "clear sky")
  }[];
  wind: {
    speed: number; // Wind speed in m/s
  };
}
interface ForecastListProps {
  list: ForecastItem[]; // Array of forecast items
}

export default function HomePage() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastListProps | null>(null);

  const fetchWeather = async () => {
    try {
      const weatherData = await getWeatherData(city);
      const forecastData = await getForecastData(city);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-sky-500 to-indigo-600 p-6">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Weather Explorer
        </h1>
        <p className="text-xl text-white/80 mt-2">
          Type the name of a city and press{" "}
          <span className="font-semibold">Enter</span> to get the weather
          details.
        </p>
      </div>
      <input
        className="mb-4 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/80"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        placeholder="Enter city"
      />

      {weather && (
        <>
          <WeatherCard
            city={weather.name}
            temp={weather.main.temp}
            weather={weather.weather[0].main}
          />
          <WeatherDetails
            humidity={weather.main.humidity}
            pressure={weather.main.pressure}
            wind={weather.wind.speed}
          />
        </>
      )}

      {forecast && <ForecastList list={forecast.list} />}
    </main>
  );
}
