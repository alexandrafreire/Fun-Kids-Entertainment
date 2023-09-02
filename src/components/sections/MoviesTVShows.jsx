import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Movies as MoviesModel } from "./../../models";
import "./MoviesTVShows.css";

function MoviesTVShowsComponent() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10); // Set the number of items you want to display per page

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await DataStore.query(MoviesModel);
      setMovies(movieData);
    };

    fetchMovies();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flexContainer">
        {currentMovies.map((movie, index) => (
          <div className="flexItem" key={index}>
            <div className="movieCard">
              <img
                src={movie.movieImage}
                alt={`${movie.movieImage} Thumbnail`}
                className="movies"
              />
              <div className="movieInfo">
                <h2 className="movieTitle">{movie.movieName}</h2>
                <p className="movieDescription">{movie.moviesDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(movies.length / moviesPerPage) },
          (_, i) => i + 1
        ).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default MoviesTVShowsComponent;
