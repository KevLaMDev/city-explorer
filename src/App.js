import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import Header from './Header';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
      locationData: '',
    };
  };

  handleSubmit = (userSearch) => {
    userSearch.toLowerCase();
    this.setState({
      userSearch
    });
  };

  apiCall = async () => {
    let data = await axios.get()
  }

  render() {
    return (
      <>
        <Header title='City Explorers' subtitle='View a map of your favorite city in real time'/>
        <UserForm handleSubmit={this.handleSubmit}/>
      </>
    )
  }

}

export default App;
