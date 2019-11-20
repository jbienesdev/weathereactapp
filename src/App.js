import React, { useState } from 'react'
import './App.css'
import Weather from './components/Weather'

const App = () => {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const onEnterHandler = (e) => {
    if(e.key === 'Enter'){
      setLocation(query)
    }
  }

  return (
    <div className="App">
      <div>
        <input 
          type="text" 
          id="search-box" 
          onKeyPress={e => onEnterHandler(e)}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter a location"/>
      </div>
      <Weather locate={location}/>
    </div>
  )
}

export default App;
