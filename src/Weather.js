import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


class Weather extends React.Component {

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item>Day: {this.props.date}</ListGroup.Item>
          <ListGroup.Item>Forecast: {this.props.description}</ListGroup.Item>
          <ListGroup.Item>Temp: {this.props.temp}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}

export default Weather;
