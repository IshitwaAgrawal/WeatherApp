import React from "react";

const WeeklyWeatherItem = ({ dayData }) => {
  const { day, temperature, description, icon, humidity, pressure, windSpeed } =
    dayData;

  // Define a mapping between weather conditions and background colors
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

  // Get the background color based on the weather icon
  const backgroundColor = weatherToColor[icon] || "bg-gray-200";

  const textColor = weatherToTextColor[icon] || "text-white";

  return (
    <div
      className={`${backgroundColor} ${textColor} p-4 rounded-lg shadow-md font-bold mx-2`}
    >
      <h3 className="text-lg font-semibold mb-2">{day}</h3>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt={description}
        className="w-16 h-16 mx-auto mb-2"
      />
      <p className="text-lg font-semibold">{temperature}°C</p>
      <p className="text-sm">{description}</p>
      <div className="mt-3">
        <p className="text-sm">Humidity: {humidity}%</p>
        <p className="text-sm">Pressure: {pressure} hPa</p>
        <p className="text-sm">Wind Speed: {windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeeklyWeatherItem;
