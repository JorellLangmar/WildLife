import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import apiHandler from "../api/apiHandler";
import "../styles/animalDetail.css";
import { Link } from "react-router-dom";
import { UserContext } from "./Auth/UserContext";
import { withUser } from "../components/Auth/withUser";

class AnimalDetail extends React.Component {
  static contextType = UserContext;

  state = {
    animal: "",
    color: "",
  };

  componentDidMount = () => {
    console.log(this.context);
    if (this.context.isLoggedIn) {
      if (this.context.user.favoriteAnimal.includes(this.props.id)) {
        this.setState({
          color: "red",
        });
      } else {
        this.setState({
          color: "black",
        });
      }
    }
    console.log(this.state.color);
    apiHandler
      .getOne("/api/animal/", this.props.id)
      .then((apiRes) => {
        console.log(apiRes);
        this.setState({ animal: apiRes.data });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  };

  handleFavorite = (event) => {
    console.log(this.context.user, this.props.id);
    let favoriteAnimalsArray = [...this.context.user.favoriteAnimal];
    if (this.state.color === "black") {
      favoriteAnimalsArray.push(this.props.id);
      this.setState({
        color: "red",
      });
      this.context.user.favoriteAnimal = favoriteAnimalsArray;
      apiHandler
        .editUser(this.context.user._id, this.context.user)
        .catch((error) => {
          console.log(error);
        });
    } else {
      let result = favoriteAnimalsArray.filter((c) => {
        return c !== this.props.id;
      });
      this.setState({
        color: "black",
      });
      this.context.user.favoriteAnimal = result;
      apiHandler
        .editUser(this.context.user._id, this.context.user)
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="animalDetails">
        
          <Grid stackable columns={3}>
            <Grid.Column width={4}>
              <img
                src={this.state.animal.profileImage}
                alt="Animal Portrait"
                className="animalPortrait"
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <div className="mid-part">
                <h2 className="name">{this.state.animal.name}</h2>
                <div className="ani-id">
                  <div className="specie">
                    <p>
                      <span className="bold">Specie :</span>
                    </p>
                    <p>{this.state.animal.specie}</p>
                  </div>
                </div>
                <div className="ani-id desc">
                  <p>
                    <span className="bold">About :</span>
                  </p>
                  <p>{this.state.animal.description}</p>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              {this.context.isLoggedIn && (
                <Icon
                  style={{ cursor: "pointer" }}
                  name="heart"
                  className="iconHeart"
                  color={this.state.color}
                  onClick={() => this.handleFavorite()}
                />
              )}
              <div className="ani-id">
                <p>
                  <span className="bold">Age :</span>
                </p>
                <p>{this.state.animal.age}</p>
              </div>
              <div className="ani-id">
                <p>
                  <span className="bold">Gender :</span>
                </p>
                <p>{this.state.animal.gender}</p>
              </div>
              <div className="ani-id">
                <p>
                  <span className="bold">Conservation Status :</span>
                </p>
                <p>{this.state.animal.ConservationStatus}</p>
              </div>
            </Grid.Column>
          </Grid>
        </div>

        <div className="sponsorship">
          <div className="why-sponsor">
            <h1 className="why">Sponsor {this.state.animal.name} now !</h1>
            <h2 className="why2">Why sponsor an animal?</h2>
            <p className="text-sponsor">
              Today, R.O.A.R. needs your support so it can take things even
              further: now you can sponsor the animal of your choice and help to
              protect an endangered species! Thanks to your donation, you’ll be
              contributing to the well-being of the animals at the Sanctuary
              (veterinary equipment or enclosures, animal food, environmental
              enrichment programmes, various expenses) or the protection of
              endangered species in their native habitats (on-site conservation
              programmes).
            </p>
          </div>

          <div className="grid">
            <Grid  stackable columns={4}>
              <Grid.Column width={4}>
                <div className="sponsor">
                  {this.state.animal.adopted && (
                    <div class="overlay">
                      <div class="text-overlay">
                        <Link to={`/`} className="meetLink">
                          Already adopted!
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link
                    to={`/punctualsponsor/${this.state.animal._id}`}
                    style={{ color: "white" }}
                  >
                    Punctual
                    <br /> Sponsorship
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="sponsor">
                  {this.state.animal.adopted && (
                    <div class="overlay">
                      <div class="text-overlay">
                        <Link to={`/`} className="meetLink">
                          Already adopted!
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link
                    to={`/monthlysponsor/${this.state.animal._id}`}
                    style={{ color: "white" }}
                  >
                    Monthly
                    <br /> Sponsorship
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="sponsor">
                  {this.state.animal.adopted && (
                    <div class="overlay">
                      <div class="text-overlay">
                        <Link to={`/`} className="meetLink">
                          Already adopted!
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link
                    to={`/adoption/${this.state.animal._id}`}
                    style={{ color: "white" }}
                  >
                    1 year
                    <br />
                    Adoption
                  </Link>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(AnimalDetail);
