import React from "react";
import WeeklyWeatherItem from "./WeeklyWeatherItem"; // Import the WeeklyWeatherItem component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../utils/settings";

const WeeklyWeather = ({ weeklyData }) => {
  return (
    <div className="bg-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-4">Weekly Weather</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <Slider {...settings}>
        {weeklyData.map((day, index) => (
          <WeeklyWeatherItem key={index} dayData={day} />
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default WeeklyWeather;
