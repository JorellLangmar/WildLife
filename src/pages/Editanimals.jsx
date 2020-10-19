import React from "react";
import Navbar from "../components/Navbar";
import AddEditAnimal from "../components/Forms/FormNewEdit";

const EditAnimals = (props) => {
  return (
    <div>
      <Navbar />
      <AddEditAnimal action="edit" id={props.match.params.id} />
    </div>
  );
};

export default EditAnimals;
