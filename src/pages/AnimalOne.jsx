import React from "react";
import Navbar from "../components/Navbar";
import AnimalDetail from "../components/AnimalDetail";

const AnimalOne = (props) => {
  return (
    <div className="animalTarget">
      <Navbar />
      <AnimalDetail id={props.match.params.id}/>
    </div>
  );
};

export default AnimalOne;
