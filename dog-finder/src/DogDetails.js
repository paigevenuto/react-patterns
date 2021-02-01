import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const dogName = useParams();
  const dog = dogs.find((d) => d.name === dogName.name);
  return (
    <div className={dog.name}>
      <h1>{dog.name}</h1>
      <h3>Age: {dog.age}</h3>
      <img src={dog.src} alt={dog.name} />
      {dog.facts.map((fact) => (
        <p>{fact}</p>
      ))}
    </div>
  );
}

export default DogDetails;
