import React from "react";
import "../styles/profile.css";
import { Item, Menu, Segment } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import { withUser } from "../components/Auth/withUser";
import { UserContext } from "../components/Auth/UserContext";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

class Profile extends React.Component {
  static contextType = UserContext;

  state = {
    activeItem: "Favorites",
    sponsored: this.context.user.sponsoring,
    adopted: this.context.user.adoption,
    favorites: this.context.user.favoriteAnimal,
    favoriteDisplay: [],
  };

  componentDidMount = () => {
    apiHandler
      .getSomeId(`${this.state.favorites}`)
      .then((apiRes) => {
        this.setState({ favoriteDisplay: apiRes });
        console.log(apiRes);
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });

    // const animals = [];
    // apiHandler
    //   .getAll("/")
    //   .then((apiRes) => {
    //     apiRes.map((animal) => {
    //       return animals.push(animal.specie);
    //     });
    //     var uniqueAnimals = animals.filter((v, i, a) => a.indexOf(v) === i);
    //     this.setState({ animals: apiRes, species: uniqueAnimals });
    //   })
    //   .catch((apiErr) => {
    //     console.log(apiErr);
    //   });
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (name === "Adopted") {
      if (this.state.adopted.length === 0) {
        this.setState({ favoriteDisplay: [] });
      } else {
        apiHandler
          .getSomeId(`${this.state.adopted}`)
          .then((apiRes) => {
            this.setState({ favoriteDisplay: apiRes });
            console.log(apiRes);
          })
          .catch((apiErr) => {
            console.log(apiErr);
          });
      }
    } else if (name === "Sponsored") {
      if (this.state.sponsored.length === 0) {
        this.setState({ favoriteDisplay: [] });
      } else {
        apiHandler
          .getSomeId(`${this.state.sponsored}`)
          .then((apiRes) => {
            this.setState({ favoriteDisplay: apiRes });
            console.log(apiRes);
          })
          .catch((apiErr) => {
            console.log(apiErr);
          });
      }
    } else {
      if (this.state.sponsored.favorites === 0) {
        this.setState({ favoriteDisplay: [] });
      } else {
        apiHandler
          .getSomeId(`${this.state.favorites}`)
          .then((apiRes) => {
            this.setState({ favoriteDisplay: apiRes });
            console.log(apiRes);
          })
          .catch((apiErr) => {
            console.log(apiErr);
          });
      }
    }
  };

  render() {
    return (
      <div className="profilePage">
      <Navbar />
        <Item.Group style={{ margin: "5vh 5vw" }}>
          <Item>
            <Item.Image
              size="small"
              src="https://res.cloudinary.com/dxgllmny2/image/upload/v1603200377/clipart1717870_dcec3q.png"
              alt=""
            />

            <Item.Content>
              <Item.Header as="a" style={{ fontSize: "250%" }}>
                {this.context.user.firstname} {this.context.user.lastname}
              </Item.Header>
              <Item.Description style={{ fontSize: "150%" }}>
                <p>{this.context.user.email}</p>
                <p>{this.context.user.adress}</p>
                <p>{this.context.user.phone}</p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

        <div>
          <Menu
            pointing
            color="blue"
            style={{ margin: "5vh 5vw", background: "transparent" }}
          >
            <Menu.Item
              name="Favorites"
              active={this.state.activeItem === "Favorites"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Adopted"
              active={this.state.activeItem === "Adopted"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Sponsored"
              active={this.state.activeItem === "Sponsored"}
              onClick={this.handleItemClick}
            />
          </Menu>
          
          {/* <Segment style={{ margin: "0vh 5vw", background: "transparent" }}> */}
            <div className="animalGridProfile">
              {this.state.favoriteDisplay.map((animal, i) => {
                return (
                  <div key={i} className="animalCardsProfile">
                    <img
                      src={animal.profileImage}
                      alt="Animal Portrait"
                      className="animalPhoto"
                    />
                    <h2 className="animalNameProfile">{animal.name}</h2>
                    <div className="overlay">
                      <div className="text-overlay">
                        <Link to={`/${animal._id}`} className="meetLink">
                          Meet {animal.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          {/* </Segment> */}
        </div>
      </div>
    );
  }
}

export default withUser(Profile);
