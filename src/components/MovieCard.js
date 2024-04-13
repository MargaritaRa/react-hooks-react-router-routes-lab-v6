import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`} className="movie-link">
        View Info
      </Link>
    </article>
  );
}

export default MovieCard;


//This component is already set up to render the title of one movie. 
//You'll need to pass it the appropriate props to render a movie's title. 
//You'll also need to use a Link component from react-router-dom that uses 
//dynamic routing to link a user to the Movie page, using the movie id as a parameter.