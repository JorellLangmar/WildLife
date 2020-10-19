import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react';
import apiHandler from "../api/apiHandler";
import "../styles/animalDetail.css";

class AnimalDetail extends React.Component {
state = {
  animal : '',
}

  componentDidMount = () => {
    apiHandler
      .getOne("/api/animal/", this.props.match.params.id)
      .then((apiRes) => {
          console.log(apiRes);
      this.setState({ animal: apiRes.data });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }


  render() {
    return (
      <div className="animalDetails">
          <Grid>
    <Grid.Column width={4}>
    <img src={this.state.animal.profileImage} alt="Animal Portrait" className="animalPortrait"/>
    </Grid.Column>
    <Grid.Column width={9}>
    <div className="mid-part">
      <h2 className="name">{this.state.animal.name}</h2>
      <div className="ani-id">
      <div className="specie"><p><span className="bold">Specie :</span></p>
      <p>{this.state.animal.specie}</p></div>
      </div>
      <div className="ani-id desc">
      <p><span className="bold">About :</span></p>
      <p>{this.state.animal.description}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
    </Grid.Column>
    <Grid.Column width={3}>
    <div className="ani-id">
     <p><span className="bold">Age :</span></p>
     <p>{this.state.animal.age}</p>
    </div> 
    <div className="ani-id">
     <p><span className="bold">Gender :</span></p>
     <p>{this.state.animal.gender}</p>
    </div> 
    <div className="ani-id">
     <p><span className="bold">Conservation Status :</span></p>
     <p>{this.state.animal.ConservationStatus}</p>
     </div>
    </Grid.Column>
  </Grid>
      </div>
    )
  }
}

export default AnimalDetail;


