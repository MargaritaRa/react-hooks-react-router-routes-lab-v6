import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;


// This component should render the text Actors Page in an <h1>, 
//and render a new <article> element for each actor in our array of actors. 
//The <article> should contain the actor's name in an <h2> 
//and a <ul> with a list of their movies.