import React from 'react';

const CurrentWeather = ({ weatherData }) => {
  const { location, temperature, description, icon, humidity, pressure, localTime } = weatherData;

  return (
    <div className="bg-gradient-to-b from-yellow-300 to-yellow-200 p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">{location}</h2>
        <div className="flex items-center justify-center">
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt={description}
            className="w-16 h-16 mr-2"
          />
          <p className="text-2xl font-semibold">{temperature}°C</p>
        </div>
        <p className="text-lg">{description}</p>
        <div className="mt-4">
          <p className="text-lg">Humidity: {humidity}%</p>
          <p className="text-lg">Pressure: {pressure} hPa</p>
          <p className="text-lg">Local Time: {localTime}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
