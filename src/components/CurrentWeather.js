import React from "react";
import moment from "moment/moment";

const CurrentWeather = ({ location, weatherData, lat, lon, loading }) => {
  const {
    dew_point,
    dt,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    uvi,
    visibility,
    weather,
    wind_speed,
  } = weatherData;

  const weatherToColor = {
    "01d": "bg-yellow-300", // Clear sky (day)
    "01n": "bg-blue-900 text-white", // Clear sky (night)
    "02d": "bg-yellow-100", // Few clouds (day)
    "02n": "bg-blue-800", // Few clouds (night)
    "03d": "bg-gray-300", // Scattered clouds (day)
    "03n": "bg-gray-800", // Scattered clouds (night)
    "04d": "bg-gray-400", // Broken clouds (day)
    "04n": "bg-gray-900", // Broken clouds (night)
    "09d": "bg-blue-600", // Showers (day)
    "09n": "bg-blue-900", // Showers (night)
    "10d": "bg-blue-600", // Rain (day)
    "10n": "bg-blue-900", // Rain (night)
    "11d": "bg-gray-600", // Thunderstorm (day)
    "11n": "bg-gray-900", // Thunderstorm (night)
    "13d": "bg-yellow-100", // Snow (day)
    "13n": "bg-blue-700", // Snow (night)
    "50d": "bg-gray-100", // Mist (day)
    "50n": "bg-gray-700", // Mist (night)
  };

  const weatherToTextColor = {
    "01d": "text-black", // Clear sky (day)
    "01n": "text-white", // Clear sky (night)
    "02d": "text-black", // Few clouds (day)
    "02n": "text-white", // Few clouds (night)
    "03d": "text-black", // Scattered clouds (day)
    "03n": "text-white", // Scattered clouds (night)
    "04d": "text-black", // Broken clouds (day)
    "04n": "text-white", // Broken clouds (night)
    "09d": "text-white", // Showers (day)
    "09n": "text-white", // Showers (night)
    "10d": "text-white", // Rain (day)
    "10n": "text-white", // Rain (night)
    "11d": "text-white", // Thunderstorm (day)
    "11n": "text-white", // Thunderstorm (night)
    "13d": "text-black", // Snow (day)
    "13n": "text-white", // Snow (night)
    "50d": "text-black", // Mist (day)
    "50n": "text-white", // Mist (night)
  };

  const backgroundColor = weatherToColor[weather[0].icon] || "bg-gray-200";
  const textColor = weatherToTextColor[weather[0].icon] || "text-white";
  const updatedTime = dt;

  return (
    <div
      className={`${backgroundColor} ${textColor} my-10 mx-auto w-fit grid sm:grid-cols-1 md:grid-cols-2 md:flex md:flex-row md:justify-center md:items-center gap-8 p-6 rounded-lg shadow-lg `}
    >
      <>
        {/* First Column */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">{location}</h2>
          <img
            src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
            alt={weather[0].description}
            className="w-16 h-16 mx-auto mb-2"
          />
          <p className="text-4xl font-semibold">{temp}°C</p>
          <p className="text-xl mb-4">{weather[0].description}</p>
          <p className="text-lg">Updated as of : {updatedTime}</p>
          <p className="text-lg">Sunrise: {sunrise}</p>
          <p className="text-lg">Sunset: {sunset}</p>
          <p className="text-lg">
            Coordinates: {lat}, {lon}
          </p>
        </div>

        {/* Second Column */}
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center">
              <p className="text-lg font-semibold">Humidity</p>
              <p className="text-2xl">{humidity}%</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Pressure</p>
              <p className="text-2xl">{pressure} hPa</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Wind</p>
              <p className="text-2xl">{wind_speed} m/s</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Visibility</p>
              <p className="text-2xl">{visibility} meters</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Barometer</p>
              <p className="text-2xl">{pressure} hPa</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Dew Point</p>
              <p className="text-2xl">{dew_point}°C</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CurrentWeather;
