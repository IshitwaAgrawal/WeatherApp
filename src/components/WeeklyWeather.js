import React from 'react';
import WeeklyWeatherItem from './WeeklyWeatherItem'; // Import the WeeklyWeatherItem component

const WeeklyWeather = ({ weeklyData }) => {
  return (
    <div className="bg-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-4">Weekly Weather</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {weeklyData.map((day, index) => (
          <WeeklyWeatherItem key={index} dayData={day} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;
