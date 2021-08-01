import React, { useState } from "react";

function NewPlantForm( {onAddtoArray} ) {

  const [namePlant, setNamePlant] = useState("");
  const [imagePlant, setImagePlant] = useState("");
  const [pricePlant, setPricePlant] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const obj = {
      name: namePlant,
      image: imagePlant,
      price: pricePlant,
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((newPlant) => onAddtoArray(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value = {namePlant} onChange = {(e) => setNamePlant(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value = {imagePlant} onChange = {(e) => setImagePlant(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value = {pricePlant} onChange = {(e) => setPricePlant(parseFloat(e.target.value))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
