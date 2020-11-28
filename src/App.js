import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <div className="app">
       <CurrentWeather />

       {/* 
          Daily weather caraousel for day forecast
            each weather tile ->
              date
              icon
              max min
              weather condition
        */
        }

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
