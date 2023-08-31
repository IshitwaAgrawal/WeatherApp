import React from 'react';

const CurrentWeather = ({ location, weatherData, lat, lon}) => {
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
    '01d': 'bg-yellow-300', // Sunny
    '02d': 'bg-yellow-300', // Partly cloudy
    '03d': 'bg-blue-300',   // Cloudy
    '04d': 'bg-blue-300',   // Cloudy
    '09d': 'bg-blue-500',   // Showers
    '10d': 'bg-blue-500',   // Rain
    '11d': 'bg-blue-500',   // Thunderstorm
    '13d': 'bg-blue-300',   // Snow
    '50d': 'bg-blue-300',   // Mist
  };

  // Get the background color based on the weather icon
  const backgroundColor = weatherToColor[weather[0].icon] || 'bg-gray-200'; // Default to gray

  return (
    <div className={`${backgroundColor} text-black my-10 mx-auto w-fit grid sm:grid-cols-1 md:grid-cols-2 md:flex md:flex-row md:justify-center md:items-center gap-8 p-6 rounded-lg shadow-lg `}>
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
        <p className="text-lg">Updated as of : {dt}</p>
        <p className="text-lg">Sunrise: {sunrise}</p>
        <p className="text-lg">Sunset: {sunset}</p>
        <p className="text-lg">Coordinates: {lat}, {lon}</p>
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
    </div>
  );
};

export default CurrentWeather;
