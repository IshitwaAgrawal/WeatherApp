import axios from "axios";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";
import SearchWeather from "../src/components/Search";
import CurrentWeather from "../src/components/CurrentWeather";
import WeeklyWeather from "../src/components/WeeklyWeather";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    axios
      .get(`/api/getWeatherData?cityName=${city}`)
      .then((res) => {
        const crnt_data = res?.data?.data;
        setData(crnt_data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      {data ? (
        <>
          <Header />
          <Hero />
          <SearchWeather
            setLoading={setLoading}
            loading={loading}
            setCity={setCity}
          />
          <CurrentWeather
            dt={data?.dt}
            feels_like={data?.main?.feels_like}
            humidity={data?.main?.humidity}
            pressure={data?.main?.pressure}
            sunrise={data?.sys?.sunrise}
            sunset={data?.sys?.sunset}
            temp={data?.main?.temp}
            visibility={data?.visibility}
            weather={data?.weather}
            wind_speed={data?.wind?.speed}
            lat={data?.coord?.lat}
            lon={data?.coord?.lon}
            location={data?.name}
            timezone_offset={data?.timezone}
            error={error}
            loading={loading}
          />
          {/* <WeeklyWeather
            weeklyData={data?.daily}
            loading={loading}
            timezone_offset={data?.timezone_offset}
          /> */}
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Home;
