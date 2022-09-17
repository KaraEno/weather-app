import './App.css';
import CurrentWeather from './components/search/current-weather/current-weather';
import Search from './components/search/search';
import { WEATHER_API_KEY, WEATHER_API_URL, SUNRISE_SUNSET_API } from './api'
import { useState } from 'react';
import Forecast from './components/search/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState("")
  
  const [sunSetRise, setSunSetRise] = useState('')

  

  const HandleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const sunsetFetch = fetch(`${SUNRISE_SUNSET_API}?lat=${lat}&lng=${lon}`)

    Promise.all([CurrentWeatherFetch, forecastFetch, sunsetFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()
      const sunsetResponse = await response[2].json()

      
      setCurrentWeather({city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse});
      setSunSetRise(sunsetResponse)
    } )
      .catch((e) => console.log(e))
    
  }
  // console.log("sunset", sunSetRise)
  // console.log(forecast)
  // console.log(currentWeather)
  
  return (
    <div className="container">
      <Search onSearchChange={HandleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} sun={sunSetRise} />}
      {forecast && <Forecast  data={forecast}/>}
    </div>
  );
}

export default App;
