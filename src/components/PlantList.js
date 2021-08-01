import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {listings} ) {

  return (
    <ul className="cards">
      {listings.map((listing) => (
      <PlantCard key = {listing.id} listing = {listing}/>
    ))}
    </ul>
  );
}

export default PlantList;
