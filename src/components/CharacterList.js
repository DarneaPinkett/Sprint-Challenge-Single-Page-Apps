import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";
import {Link} from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filiterdData, updateData] = useState([]);

  const search = charArr => {
    updateData(charArr)
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {console.log(response.data.results);
    setCharacters(response.data.results);
    updateData(response.data.results);
  });
  }, []);

  return (
    <section className="character-list">
      <h2>List of Characters</h2>
      <Link className="main-buttons" to={"/"}>Home</Link>
      <SearchForm search={search} characters={characters} />
      {filiterdData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}
    </section>
  );
}
