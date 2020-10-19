import React from "react";
import apiHandler from "../api/apiHandler";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Checkbox } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../styles/animalCards.css";
import { Link } from "react-router-dom";

class AnimalCard extends React.Component {
  state = {
    species: [],
    animals: [],
    animalcheck: [],
  };

  componentDidMount = () => {
    const animals = [];
    apiHandler
      .getAll("/")
      .then((apiRes) => {
        apiRes.map((animal) => {
          return animals.push(animal.specie);
        });
        var uniqueAnimals = animals.filter((v, i, a) => a.indexOf(v) === i);
        this.setState({ animals: apiRes, species: uniqueAnimals });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  };

  handleCheck = (e, { value }) => {
    let duplicateAnimals = [...this.state.animalcheck];
    duplicateAnimals = this.state.animalcheck.includes(value);
    if (duplicateAnimals) {
      let result = this.state.animalcheck.filter((c) => {
        return c !== value;
      });
      this.setState({ animalcheck: result });
      apiHandler
      .getSome(`${result}`)
      .then((apiRes) => {
        this.setState({ animals: apiRes });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
    } else {
      const result = [...this.state.animalcheck];
      result.push(value);
      this.setState({ animalcheck: result });
      console.log(result);
      // console.log(this.state.animalcheck);
      apiHandler
        .getSome(`${result}`)
        .then((apiRes) => {
          this.setState({ animals: apiRes });
        })
        .catch((apiErr) => {
          console.log(apiErr);
        });
      return result;
    }
  };

  render() {
    return (
      <div className="Filter-Animals">
        <div
          style={{
            padding: "1vw 3vw",
            backgroundColor: "#455",
            margin: "3% 0%",
          }}
        >
          <ul class="nav nav-pills nav-fill" data-toggle="pill">
            {this.state.species.map((specie, i) => {
              return (
                <li
                  class="nav-item"
                  data-toggle="pill"
                  style={{ color: "white" }}
                >
                  <Checkbox value={specie} onChange={this.handleCheck} />{" "}
                  {specie}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="animalGrid">
          {this.state.animals.map((animal) => {
            return (
              <div className="animalCards">
                <img
                  src={animal.profileImage}
                  alt="Animal Portrait"
                  className="animalPhoto"
                />
                <h2 className="animalName">{animal.name}</h2>
                <div class="overlay">
                  <div class="text-overlay">
                    <Link to={`/${animal._id}`} className="meetLink">
                      Meet {animal.name}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AnimalCard;
