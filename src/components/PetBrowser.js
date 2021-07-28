import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const displayPets = pets.map((eachPet) => {
    return <Pet pet={eachPet} key={eachPet.id} onAdoptPet={onAdoptPet} />
  })

  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
