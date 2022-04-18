import { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherInfo = ({ countryName, latitude, longitude }) => {
  const [weather, setWeather] = useState({})

  const apiKey = process.env.REACT_APP_API_KEY 

  const getWeatherInfo = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then((response) => {
        console.log(response)
        setWeather(response.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(getWeatherInfo, [])

  if (Object.keys(weather) <= 0) {
    return (
      <></>
    )
  }

  return (
    <div>
      <h2>Weather in {countryName}</h2>
      <p>temperature {weather?.main.temp} ˚C</p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
      <p>wind speed {weather?.wind.speed} m/s</p>

    </div>
  )
}

export default WeatherInfo