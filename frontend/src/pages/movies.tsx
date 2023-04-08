import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Movie } from '../types/movie';
import React from 'react';

function Movies() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovie();
  }, []);

  const editedMovies = movieData
    .filter((movie) => movie.edited)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container">
      <h3>Joel Hilton's Movie Collection</h3>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {editedMovies.map((movie) => (
              <tr key={movie.movieId}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.rating}</td>
                <td>{movie.category}</td>
                <td>{movie.edited}</td>
                <td>{movie.lentTo}</td>
                <td>{movie.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Movies;
