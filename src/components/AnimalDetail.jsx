import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react';
import apiHandler from "../api/apiHandler";
import "../styles/animalDetail.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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
      <div>
      
      <div className="navbarfix">
      <Navbar />
      </div>

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

  <div className="sponsorship">
<div className="why-sponsor">
    <h1 className="why">Sponsor {this.state.animal.name} now !</h1>
    <h2 className="why2">Why sponsor an animal?</h2>
    <p className="text-sponsor">Today, R.O.A.R. needs your support so it can take things even further: now you can sponsor the animal of your choice and help to protect an endangered species!
Thanks to your donation, you’ll be contributing to the well-being of the animals at the Sanctuary (veterinary equipment or enclosures, animal food, environmental enrichment programmes, various expenses) or the protection of endangered species in their native habitats (on-site conservation programmes).</p>
</div>

  <div className="grid">
    <Grid>
    <Grid.Column width={4}>
    <div className="sponsor"><Link to={`/#`} style={{color:'white'}}>Punctual<br/> Sponsorship</Link></div>
    </Grid.Column>
    <Grid.Column width={4}>
    <div className="sponsor"><Link to={`/#`} style={{color:'white'}}>Monthly<br/> Sponsorship</Link></div>
    </Grid.Column>
    <Grid.Column width={4}>
    <div className="sponsor"><Link to={`/#`} style={{color:'white'}}>1 year<br/>Adoption</Link></div>
    </Grid.Column>
  </Grid>
  </div>
      </div>


      </div>
    )
  }
}

export default AnimalDetail;


