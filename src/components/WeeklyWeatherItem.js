import React from "react";

const WeeklyWeatherItem = ({ dayData }) => {
  const { day, temperature, description, icon, humidity, pressure, windSpeed } =
    dayData;

  // Define a mapping between weather conditions and background colors
  const weatherToColor = {
    "01d": "bg-yellow-300", // Sunny
    "02d": "bg-yellow-300", // Partly cloudy
    "03d": "bg-blue-300", // Cloudy
    "04d": "bg-blue-300", // Cloudy
    "09d": "bg-blue-500", // Showers
    "10d": "bg-blue-500", // Rain
    "11d": "bg-blue-500", // Thunderstorm
    "13d": "bg-blue-300", // Snow
    "50d": "bg-blue-300", // Mist
  };

  // Get the background color based on the weather icon
  const backgroundColor = weatherToColor[icon] || "bg-gray-200"; // Default to gray

  return (
    <div
      className={`${backgroundColor} p-4 rounded-lg shadow-md mx-2 text-sm sm:text-base md:text-lg`}
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
        {day}
      </h3>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt={description}
        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2"
      />
      <p className="text-lg sm:text-xl md:text-2xl font-semibold">
        {temperature}°C
      </p>
      <p className="text-sm sm:text-base md:text-lg">{description}</p>
      <div className="mt-3">
        <p className="text-sm sm:text-base md:text-lg">Humidity: {humidity}%</p>
        <p className="text-sm sm:text-base md:text-lg">
          Pressure: {pressure} hPa
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          Wind Speed: {windSpeed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeeklyWeatherItem;
