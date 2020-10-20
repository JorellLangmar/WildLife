import React from "react";
import Navbar from "../components/Navbar";
import AddEditAnimal from "../components/Forms/FormNewEdit";

class CreateAnimals extends React.Component {
  render() {
    return (
      <div className="createanimals">
        <Navbar />
        <div>
          <AddEditAnimal />
        </div>
      </div>
    );
  }
}

export default CreateAnimals;
