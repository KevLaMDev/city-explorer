import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class WeatherDay extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>{this.props.date}</ListGroupItem>
        <ListGroupItem>{this.props.description}</ListGroupItem>
        <ListGroupItem>{this.props.temp}</ListGroupItem>
      </ListGroup>
      
    )
  }
}

export default WeatherDay
