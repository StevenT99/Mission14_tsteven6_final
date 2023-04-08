import { useState } from 'react';
//import data from './MovieData.json';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Movie } from '../types/movie';
import React from 'react';

//const mds = data.MovieData;

function Movies() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  return (
    <div className="container">
      <h3>Joel Hilton's Movie Collection</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((f) => (
            <tr key={f.movieId}>
              <td>{f.category}</td>
              <td>{f.title}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Movies;
