import React from 'react'
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

  render() {
    let forecasts = this.props.data.map((obj, idx) => {
      return (
      <div className="listItem">
        <WeatherDay 
          date={obj.date}
          description={obj.description}
          temp={obj.temp}
          key={idx}
        />
      </div>
      )
    })
    return forecasts
  }
}

export default Weather;
