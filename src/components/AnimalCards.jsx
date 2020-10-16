import React from "react";
import apiHandler from "../api/apiHandler";

import "../styles/animalCards.css";

class AnimalCard extends React.Component {
  state = {
    animals: [],
  };

  componentDidMount = () => {
    apiHandler
      .getAll("/")
      .then((apiRes) => {
          console.log(apiRes);
        this.setState({ animals: apiRes });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }

  render() {
    return (
      <div className="Filter-Animals">
      <div>Dropdown filterbox to implement here</div>
        <div className="animalGrid">
       
        {this.state.animals.map((animal) => {
            return <div className="animalCards">
            <img src={animal.profileImage} alt="Animal Portrait" className="animalPhoto"/>
            <h2 className="animalName">{animal.name}</h2>
            <div class="overlay">
            <div class="text-overlay"><a href="#" className="meetLink">Meet {animal.name}</a></div>
            </div>
        </div>})}
       </div>
      </div>
    );
  }
}

export default AnimalCard;
