import React from "react";
import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrongs.</h1>
      </main>
    </>
  );
}

export default ErrorPage;

