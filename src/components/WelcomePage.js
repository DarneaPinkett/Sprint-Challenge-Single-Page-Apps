import React from "react";
import {Link} from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>The Ultimate Fan Site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link className="main-buttons" to={'/characters'}>Show Characters</Link>
      </header>
    </section>
  );
}
