import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return movies.map((movie, index) => (
    <Movie key={movie._id.toString()} title={movie.title} plot={movie.plot}/>      
  ));
};

export default MovieList;
