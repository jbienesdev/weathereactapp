import React from 'react'
import axios from 'axios'

class Weather extends React.Component{
    constructor(){
        super()
        this.state = {
            geo: '',
            temperature: '',
            imgSrc: '',
            weatherText: ''
        }
    }

    componentWillReceiveProps(locate){
        this.setState({
            temperature: 'Loading...',
            geo: '',
            imgSrc: '',
            weatherText: ''
        })
        //fetching data from the API
        axios.get(`https://api.apixu.com/v1/current.json?key=cc001712bef340b683e120254170505&q=${locate.locate}`) //dont convert into state
            .then(res => {
                this.setState({
                    geo: `${res.data.location.name}, ${res.data.location.country}`,
                    temperature: `${res.data.current.temp_c} °C`,
                    imgSrc: res.data.current.condition.icon,
                    weatherText: res.data.current.condition.text
                })
            }).catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="weather-board">
                <img src={this.state.imgSrc} alt=""/>
                <h1 className="temp">{this.state.temperature}</h1>
                <p className="location">{this.state.geo}</p>
                <p className="weather-text">{this.state.weatherText}</p>
            </div>
        )
    }
}

export default Weather