import React from 'react';

const Attribution = () => {
  return (
    <div className="bg-gray-100 py-4 text-center">
      <p className="text-sm text-gray-600">
        Weather data provided by{' '}
        <a
          href="https://openweathermap.org/"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeatherMap
        </a>
      </p>
    </div>
  );
};

export default Attribution;
