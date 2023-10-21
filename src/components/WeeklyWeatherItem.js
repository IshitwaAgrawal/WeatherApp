import React from "react";
import {
  weatherToColor,
  weatherToTextColor,
} from "../../utils/helper_functions";

const WeeklyWeatherItem = ({ dayData }) => {
  const { day, temperature, description, icon, humidity, pressure, windSpeed } =
    dayData;

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
