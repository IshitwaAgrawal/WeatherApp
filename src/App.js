import './App.css';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DailyWeather from './container/DailyWeather/DailyWeather';
import HourlyWeather from './container/HourlyWeather/HourlyWeather';

function App() {
  return (
    <div className="app">
      <Header />
      <CurrentWeather />
      <DailyWeather />
      <HourlyWeather />
        {/* 
          Day Details
            Sunrise
              icon temperature
            Sunset
              icon temperature

            Precipitaion , Humidity, UV Index, Max Wind with direction
        */}
    </div>
  );
}

export default App;
