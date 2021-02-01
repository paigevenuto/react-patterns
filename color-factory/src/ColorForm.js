import React from "react";
import useFields from "./useFields";
import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {
  const history = useHistory();

  const [formData, handleChange] = useFields({
    colorValue: "",
    colorName: "",
  });

  const handleSubmit = () => {
    const color = { name: formData.colorName, value: formData.colorValue };
    addColor(color);
    history.push("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorValue">Color Value</label>
      <input
        name="colorValue"
        type="color"
        id="colorValue"
        value={formData.colorValue}
        onChange={handleChange}
        required
      />
      <label htmlFor="colorName">Color Name</label>
      <input
        name="colorName"
        type="text"
        id="colorName"
        value={formData.colorName}
        onChange={handleChange}
        required
      />
      <button>"Add this color"</button>
    </form>
  );
}

export default ColorForm;
