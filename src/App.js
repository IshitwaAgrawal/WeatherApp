import './App.css';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DailyWeather from './container/DailyWeather/DailyWeather';

function App() {
  return (
    <div className="app">
       
      {/* 
          Search bar with App name on top left 
          and search box on right
      */}

      <Header />

       <CurrentWeather />

       <DailyWeather />

        {/* 
          caraousel Hourly forecast
            each weather tile ->
              weather icon
              temperature
              weather condition
              humidity
              wind speed+direction
              time
        */}

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
