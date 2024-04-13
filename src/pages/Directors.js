import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;



//This component should render on the /directors route. 
//It should display the text Directors Page in an <h1>, 
//and render a new <article> element for each director in our array of directors. 
//The <article> should contain the director's name in an <h2> 
//and a <ul> with a list of their movies.