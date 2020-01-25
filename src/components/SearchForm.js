import React, { useState } from "react";

export default function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filterd = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(filterd);
    console.log(filterd);
  };
 
  return (
    <section className="search-form">
     <form onSubmit={submitHandler}>
       <input type="text" name="character" placeholder="Search By Name" onChange={handleChanges}></input>
     </form>
    </section>
  );
}
