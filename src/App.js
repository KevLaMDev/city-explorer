import React from 'react';
import axios from 'axios';
import Header from './Header';
import Image from 'react-bootstrap/Image'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
      locationData: '',
      renderMap: false,
      mapUrl: '',
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
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_ACCESS_TOKEN}&q=${this.state.userSearch}&format=json`;
    let responseData = await axios.get(url)
    this.setState({
      locationData: responseData.data[0],
    })
    console.log(this.state.locationData)
    this.setState({
      mapUrl:`https://maps.locationiq.com/v3/staticmap?key=pk.09705190e7b42d59adba58923c8dbfa4&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`,
    })
  };


  render() {
    return (
      <>
        <Header title='City Explorers' subtitle='View a map of your favorite city in real time' />
        <main>
          <form onSubmit={this.getCityInfo}>
            <label>Enter a City!
              <input type="text" name="city" onInput={this.handleSubmit}></input>
            </label>
            <button type="submit">Submit</button>
          </form>
          <h1>Location: {this.state.locationData.display_name}</h1>
          <p>Latitude: {this.state.locationData.lat}</p>
          <p>longitude: {this.state.locationData.lon}</p>
          <div>
          <Image rounded={true} src={this.state.mapUrl}/>
          </div>
        </main>
      </>
    )
  }

}

export default App;
