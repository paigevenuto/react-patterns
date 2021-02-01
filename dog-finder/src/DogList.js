import React from "react";
import { useHistory } from "react-router-dom";

function DogList({ dogs }) {
  const history = useHistory();

  const viewDog = (evt) => {
    history.push(`/dogs/${evt.target.alt}`);
  };

  return (
    <div className="DogList">
      <h1>List of dogs</h1>
      {dogs.map((dog) => (
        <div>
          <h2>{dog.name}</h2>
          <h3>Age: {dog.age}</h3>
          <img src={dog.src} alt={dog.name} onClick={viewDog} />
          {dog.facts.map((fact) => (
            <p>{fact}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DogList;
