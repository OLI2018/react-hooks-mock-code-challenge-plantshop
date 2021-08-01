import React, {useState} from "react";

function PlantCard( {listing} ) {

  const [inStock, setInStock] = useState(true); 
  
  return (
    <li className="card">
      <img src={listing.image} alt={"plant name"} />
      <h4>{listing.name}</h4>
      <p>Price: {listing.price}</p>
      {inStock ? (
        <button onClick = {() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick = {() => setInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
