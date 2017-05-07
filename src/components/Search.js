import React from 'react'

class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            geolocation: ''
        }
    }

    settingState = (e) => {
        if(e.key === 'Enter'){
            let location = document.getElementById('search-box').value
            this.props.getUserInput(location)
            document.getElementById('search-box').value = ''
        }
    }
    
    render(){
        return(
            <div>
                <input type="text" id="search-box" onKeyPress={this.settingState} placeholder="Enter a location"/>
            </div>
        )
    }
}

export default Search