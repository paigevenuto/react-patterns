import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Colors({ colorList }) {
  return (
    <div className="Colors">
      <h2>Welcome to the color factory!</h2>
      <h1>
        <Link to="/colors/new">Add a color</Link>
      </h1>
      <h3>Available Colors:</h3>
      <ul>
        {colorList.map((c) => {
          const colorPath = "/colors/" + c.name;
          const key = uuid();
          return (
            <li id={c.name} key={key}>
              <Link to={colorPath}>{c.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Colors;
