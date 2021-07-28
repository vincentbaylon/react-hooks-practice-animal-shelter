import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { name, type, age, weight, gender, isAdopted, id } = pet

  function handleClick() {
    onAdoptPet(id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {(gender === "male" ? "♂" : "♀")}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? 
          <button className="ui primary button">Already adopted</button> :
          <button onClick={handleClick} className="ui primary button">Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
