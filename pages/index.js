import Header from "../src/components/Header"
import Hero from "../src/components/Hero";
import Attribution from "../src/components/Attribution";
import Footer from "../src/components/Footer";
import SearchWeather from "../src/components/Search";
import CurrentWeather from "../src/components/CurrentWeather";
import WeeklyWeather from "../src/components/WeeklyWeather";

function Home() {

  const data = {
    "location": "New York, NY",
    "temperature": 22,
    "description": "Partly cloudy",
    "icon": "02d",
    "humidity": 60,
    "pressure": 1013,
    "localTime": "12:30 PM"
  };  

  const weeklyData = [
    {
      "day": "Monday",
      "temperature": 25,
      "description": "Partly cloudy",
      "icon": "02d",
      "humidity": 60,
      "pressure": 1013,
      "windSpeed": 5
    },
    {
      "day": "Tuesday",
      "temperature": 28,
      "description": "Sunny",
      "icon": "01d",
      "humidity": 55,
      "pressure": 1015,
      "windSpeed": 8
    },
    {
      "day": "Wednesday",
      "temperature": 23,
      "description": "Cloudy",
      "icon": "03d",
      "humidity": 70,
      "pressure": 1012,
      "windSpeed": 4
    },
    {
      "day": "Thursday",
      "temperature": 20,
      "description": "Rainy",
      "icon": "10d",
      "humidity": 80,
      "pressure": 1009,
      "windSpeed": 10
    },
    {
      "day": "Friday",
      "temperature": 22,
      "description": "Partly cloudy",
      "icon": "02d",
      "humidity": 65,
      "pressure": 1010,
      "windSpeed": 6
    },
    {
      "day": "Saturday",
      "temperature": 26,
      "description": "Sunny",
      "icon": "01d",
      "humidity": 50,
      "pressure": 1016,
      "windSpeed": 7
    },
    {
      "day": "Sunday",
      "temperature": 24,
      "description": "Cloudy",
      "icon": "04d",
      "humidity": 75,
      "pressure": 1014,
      "windSpeed": 3
    }
  ];
  
  

  return (
    <>
      <Header />
      <Hero />
      <SearchWeather />
      <CurrentWeather weatherData={data}/>
      <WeeklyWeather weeklyData={weeklyData}/>
      <Footer />
    </>
  )
}

export default Home;