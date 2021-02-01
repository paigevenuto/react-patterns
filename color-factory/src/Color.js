import React from "react";
import { useParams, Link } from "react-router-dom";

function Color({ colorList }) {
  const colorName = useParams().color;
  const color = colorList.find((c) => c.name === colorName);
  const style = { background: color.value };

  return (
    <div style={style}>
      <h2>This is {color.name}.</h2>
      <h2>"Isn't it beautiful?"</h2>
      <h2>
        <Link to="/colors">GO BACK</Link>
      </h2>
    </div>
  );
}

export default Color;
