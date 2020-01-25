import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <div>ID: {props.character.id}</div>
      <div>Name: {props.character.name}</div>
      <div>Gender: {props.character.gender}</div>
      <div>Species: {props.character.species}</div>
      <div>Origin: {props.character.origin.name}</div>
      <div>Status: {props.character.status}</div>
    </div>
  )
}
