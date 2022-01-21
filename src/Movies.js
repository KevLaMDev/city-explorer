import React from 'react';
import Movie from './Movie';


class Movies extends React.Component {
  render() {
    let movies = this.props.data.map((obj, idx) => {
      return (
        <Movie
          src={obj.image_url}
          title={obj.title}
          description={obj.overview}
          key={idx}
        />
      )
    })
    return movies;
  }
}

export default Movies
