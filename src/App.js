import React from 'react';
import axios from 'axios';
import Header from './Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
      locationData: {},
      renderMap: false,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let city = e.target.city.value;
    this.setState({
      userSearch: e.target.city.value,
    });
    this.getCityInfo(city);
  };

  getCityInfo = async (city) => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_ACCESS_TOKEN}&q=${city}&format=json`;
    let responseData = await axios.get(url)
    this.setState({
      locationData: responseData.data[0]
    })
  };


  render() {
    return (
      <>
        <Header title='City Explorers' subtitle='View a map of your favorite city in real time' />
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>Enter a City!
              <input type="text" name="city"></input>
            </label>
            <button type="submit">Submit</button>
          </form>
            <h1>Location: {this.state.locationData.display_name}</h1>
            <p>Latitude: {this.state.locationData.lat}</p>
            <p>longitude: {this.state.locationData.lon}</p>
        </main>
      </>
    )
  }

}

export default App;
