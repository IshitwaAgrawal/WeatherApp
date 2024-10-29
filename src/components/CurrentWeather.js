import React from "react";
import { convertEpochToDateTime } from "../../utils/helper_functions";
import Loading from "./Loading";
import Error from "./Error";
import ImageComponent from "./ImageComponent";

const CurrentWeather = ({
  dt,
  feels_like,
  humidity,
  pressure,
  sunrise,
  sunset,
  temp,
  visibility,
  weather,
  wind_speed,
  location,
  lat,
  lon,
  loading,
  timezone_offset,
  error,
}) => {
  /*
    dt,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    visibility,
    weather,
    wind_speed,

  */

  /*

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

  */

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
  const backgroundColor = weatherToColor[weather[0].icon] || "bg-gray-200";
  const textColor = weatherToTextColor[weather[0].icon] || "text-white";

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div
          className={`${backgroundColor} ${textColor} my-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 md:flex md:flex-row md:justify-center md:items-center gap-8 p-6 rounded-lg shadow-lg w-fit`}
        >
          {/* First Column */}
          <div className="text-center font-extrabold">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {loading ? <Loading /> : location}
            </h2>
            <ImageComponent
              icon={weather[0].icon}
              description={weather[0].description}
            />
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              {loading ? <Loading /> : temp + "°F"}
            </p>
            <p className="text-xl sm:text-2xl mb-4">
              {loading ? <Loading /> : weather[0].description}
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              {loading ? (
                <Loading />
              ) : (
                "Updated as of: " +
                convertEpochToDateTime(dt, timezone_offset).d_date +
                " " +
                convertEpochToDateTime(dt, timezone_offset).time
              )}
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              {loading ? (
                <Loading />
              ) : (
                "Sunrise : " +
                convertEpochToDateTime(sunrise, timezone_offset).time
              )}
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              {loading ? (
                <Loading />
              ) : (
                "Sunset : " +
                convertEpochToDateTime(sunset, timezone_offset).time
              )}
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              {loading ? <Loading /> : "Coordinates: " + lat + ", " + lon}
            </p>
          </div>

          {/* Second Column */}
          <div>
            <div className="grid grid-cols-2 gap-2 font-extrabold">
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Humidity</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : humidity + "%"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Pressure</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : pressure + " hPa"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Wind</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : wind_speed + " m/s"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Visibility</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : visibility + " meters"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Barometer</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : pressure + " hPa"}
                </p>
              </div>
              {/* <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Dew Point</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : dew_point + "°F"}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
