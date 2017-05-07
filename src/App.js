import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'


class App extends Component {
  constructor(){
    super()
    this.state = {
      location: ''
    }
    this.getUserInput = this.getUserInput.bind(this)
  }

  getUserInput(location){
    this.setState({
      location
    })
    
  }
  
  render() {
    return (
      <div className="App">
        <Search getUserInput={this.getUserInput}/>
        <Weather locate={this.state.location}/>
      </div>
    );
  }
}

export default App;
