import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import NavBar from "../components/NavBar"

function Movie() {

  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then (response => response.json())
    .then (data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId]);

  if(!movie.title){
    return <h1>Loading...</h1>
  };

  const { time, genres} = movie;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {time}</p>
        <div>
          <span>Genres: </span>
          {genres.map((genre, index) => (
            <span key={index}>{genres}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie