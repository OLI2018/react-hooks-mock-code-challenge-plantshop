import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [listings, setListing] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then(setListing);
  },[]);

  function addPlant (newPlant) {
  const updatedLlisting = [...listings, newPlant]
  setListing(updatedLlisting); 
}

const displayedPlants = listings.filter((listing) => {
  return listing.name.toLowerCase().includes(searchTerm.toLowerCase());
});


  return (
    <main>
      <NewPlantForm onAddtoArray = {addPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList listings = {displayedPlants}/>
    </main>
  );
}

export default PlantPage;

