import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  const optionalQuery = {
    all: "pets",
    cat: "pets?type=cat",
    dog: "pets?type=dog",
    micropig: "pets?type=micropig"
  }

  function onChangeType(e) {
    console.log(e.target.value)
    setFilters(e.target.value)
  }

  function onFindPetsClick() {
    fetch(`http://localhost:3001/${optionalQuery[filters]}`)
      .then(res => res.json())
      .then(data => setPets(data))
  }

  function onAdoptPet(id) {
    const updatePets = pets.map((eachPet) => {
      if (eachPet.id === id) {
        eachPet.isAdopted = true
        return eachPet
      } else {
        return eachPet
      }
    })
    setPets(updatePets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
