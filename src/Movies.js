import React from 'react';
import Card from 'react-bootstrap/Card'


class Movies extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Movies

