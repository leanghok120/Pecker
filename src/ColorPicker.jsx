import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <p style={{ backgroundColor: color }}>Selected color: {color}</p>
      <label>Select a color:</label>
      <input value={color} type="color" onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
