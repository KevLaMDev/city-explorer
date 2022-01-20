import React from 'react';
import axios from 'axios';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import './App.css';
import Weather from './Weather.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
      locationData: '',
      renderMap: false,
      mapUrl: '',
      errorEvent: false,
      errorMsg: '',
      weatherData: [],
      renderWeather: false,
    };
  };

  handleSubmit = (e) => {
    let city = e.target.value;
    this.setState({
      userSearch: city
    });
  };

  getCityInfo = async (e) => {
    e.preventDefault();
    let locationIQUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_ACCESS_TOKEN}&q=${this.state.userSearch}&format=json`;
    try {
      let gpsData = await axios.get(locationIQUrl)
      this.setState({
        locationData: gpsData.data[0],
      })
      this.setState({
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=pk.09705190e7b42d59adba58923c8dbfa4&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`,
        renderMap: true,
      })
      let serverUrl = `https://city-explorers-api-kevdev.herokuapp.com/weather?searchQuery=${this.state.userSearch}&lat=${this.state.locationData.lat}&lon=${this.state.locationData.lon}`;
      let weatherData = await axios.get(serverUrl);
      console.log(weatherData)
      this.setState({
        weatherData: weatherData.data,
        renderWeather: true
      });
      console.log(this.state.weatherData)
    } catch (error) {
      console.log(error)
      this.setState({
        errorEvent: true,
        errorMsg: `Oops! Something went wrong: ${error}`
      })
    }
  };


  render() {

    return (
      <>
        <body>
          <div className="header">
            <Header title='City Explorers' subtitle='View a map of your favorite city in real time' />
          </div>
          <div className="main">
            <main>
              <form onSubmit={this.getCityInfo}>
                <label>Enter a City!
                  <input type="text" name="city" onInput={this.handleSubmit}></input>
                </label>
                <button type="submit">Submit</button>
              </form>
              <div className="map">
                {
                  this.state.renderMap && <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.mapUrl} />
                    <Card.Body>
                      <Card.Title>{this.state.locationData.display_name}</Card.Title>
                      <Card.Text>
                        <p>Latitude: {this.state.locationData.lat}</p>
                        <p>longitude: {this.state.locationData.lon}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                }
              </div>
                <div className="forecasts">
                {
                  this.state.renderWeather && <Weather
                    date={this.state.weatherData[0].date}
                    description={this.state.weatherData[0].description}
                    lowTemp={this.state.weatherData[0].lowTemp}
                    maxTemp={this.state.weatherData[0].maxTemp}
                  />
                }
                </div>
                <div className="forecasts">
                {
                  this.state.renderWeather && <Weather
                    date={this.state.weatherData[1].date}
                    description={this.state.weatherData[1].description}
                    lowTemp={this.state.weatherData[1].lowTemp}
                    maxTemp={this.state.weatherData[1].maxTemp}
                  />
                }
                </div>
              <div className="forecasts">
                {
                  this.state.renderWeather && <Weather
                    date={this.state.weatherData[2].date}
                    description={this.state.weatherData[2].description}
                    lowTemp={this.state.weatherData[2].lowTemp}
                    maxTemp={this.state.weatherData[2].maxTemp}
                  />
                }
              </div>
              <div className="errorMsg">
                {
                  this.state.errorEvent && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Ya dun goofed kiddo</Card.Title>
                      <Card.Text>
                        <p>{this.state.errorMsg}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                }
              </div>
            </main>
          </div>
        </body>
      </>
    )
  }

}

export default App;
