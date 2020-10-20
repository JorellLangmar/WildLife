import React from "react";
import Navbar from "../components/Navbar";
import AddEditAnimal from "../components/Forms/FormNewEdit";

const EditAnimals = (props) => {
  return (
    <div className="createanimals">
      <Navbar />
      <div>
        <AddEditAnimal action="edit" id={props.match.params.id} />
      </div>
    </div>
  );
};

export default EditAnimals;
