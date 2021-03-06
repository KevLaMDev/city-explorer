import React from 'react';
import axios from 'axios';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import './App.css';
import Weather from './Weather.js';
import Movies from './Movies.js';



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
      movieData: [],
      renderMovies: false,
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
      // request map data from API
      let gpsData = await axios.get(locationIQUrl)
      this.setState({
        locationData: gpsData.data[0],
      })
      this.setState({
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=pk.09705190e7b42d59adba58923c8dbfa4&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`,
        renderMap: true,
      })
      // request movie data from server
      let movieUrl = `${process.env.REACT_APP_SERVER_URL}/movies?location=${this.state.userSearch}`
      let movieData = await axios.get(movieUrl);
      this.setState({
        movieData: movieData.data,
        renderMovies: true,
      })
      // request weather data from server
      let serverUrl = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.locationData.lat}&lon=${this.state.locationData.lon}`;
      let weatherData = await axios.get(serverUrl);
      this.setState({
        weatherData: weatherData.data,
        renderWeather: true
      });
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
            <form onSubmit={this.getCityInfo}>
              <label>Enter a City!
                <input type="text" name="city" onInput={this.handleSubmit}></input>
              </label>
              <button type="submit">Submit</button>
            </form>

            {
              this.state.renderMap && <div className="map"><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.mapUrl} />
                <Card.Body>
                  <Card.Title>{this.state.locationData.display_name}</Card.Title>
                  <Card.Text>
                    <p>Latitude: {this.state.locationData.lat}</p>
                    <p>longitude: {this.state.locationData.lon}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            }
            {
              this.state.renderWeather && <Weather data={this.state.weatherData} />
            }
            {
              this.state.renderMovies && <Movies data={this.state.movieData} />
            }
            {
              this.state.errorEvent && <div className="errorMsg"><Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Ya dun goofed kiddo</Card.Title>
                  <Card.Text>
                    <p>{this.state.errorMsg}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            }
          </div>
        </body >
      </>
    )
  }

}

export default App;
