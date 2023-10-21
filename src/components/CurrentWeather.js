import React from "react";
import {
  convertEpochToDateTime,
  weatherToColor,
  weatherToTextColor,
} from "../../utils/helper_functions";
import Loading from "./Loading";
import Error from "./Error";

const CurrentWeather = ({
  location,
  weatherData,
  lat,
  lon,
  loading,
  timezone_offset,
  error,
}) => {
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
            <img
              src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
              alt={weather[0].description}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2"
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
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold">Dew Point</p>
                <p className="text-xl sm:text-2xl">
                  {loading ? <Loading /> : dew_point + "°F"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
