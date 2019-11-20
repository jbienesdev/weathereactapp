import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ locate }) => {
  const [temperature, setTemperature] = useState('')
  const [geo, setGeo] = useState('')
  const [feelsLike, setFeelsLike] = useState('')

  useEffect(() => {
    if(locate) {
      //fetching data from the API
      axios.get(`https://api.weatherbit.io/v2.0/current?city=${locate}&key=${process.env.REACT_APP_API_KEY}`)
        .then(({ data: { data } }) => {
          setTemperature(`${data[0].temp} °C`)
          setGeo(`${data[0].city_name}, ${data[0].country_code}`) 
          setFeelsLike(`${data[0].app_temp} °C`)
        }).catch(err => {
          console.log(err)
          setTemperature('Location not found.')
        })
    }
  }, [locate])

  return (
    <div className="weather-board">
      <h1 className="temp">{temperature}</h1>
      <p className="location">{geo}</p>
      <p className="weather-text">{feelsLike ? `Feels like ${ feelsLike }` : ''}</p>
    </div>
  )
}

export default Weather