import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import Header from './Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
      locationData: '',
      renderMap: false,
    };
  };

  getCityInfo = async (e) => {
    e.preventDefault();
    let userSearch = e;
    userSearch.toLowerCase();
    this.setState({
      userSearch
    });
    let locationData = await axios.get()
    this.setState({
      locationData,
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      renderMap: true,
    })
  };

  render() {
    return (
      <>
        <Header title='City Explorers' subtitle='View a map of your favorite city in real time'/>
        <UserForm getCityInfo={this.getCityInfo} handleSubmit={this.handleSubmit}/>
        { this.state.renderMap && <img src={this.state.locationData}/> } 
      </>
    )
  }

}

export default App;
