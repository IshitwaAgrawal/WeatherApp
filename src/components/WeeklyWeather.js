import React from "react";
import WeeklyWeatherItem from "./WeeklyWeatherItem"; // Import the WeeklyWeatherItem component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../utils/settings";
import Loading from "./Loading";

const WeeklyWeather = ({ weeklyData, loading, timezone_offset }) => {
  return (
    <>
      {!loading ? (
        <div className="bg-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Weekly Weather</h2>
          <Slider {...settings}>
            {weeklyData.map((day, index) => (
              <WeeklyWeatherItem
                key={index}
                dayData={day}
                timezone_offset={timezone_offset}
              />
            ))}
          </Slider>
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default WeeklyWeather;
