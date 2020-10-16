import React from "react";
import Navbar from "../components/Navbar";
import AnimalCard from "../components/AnimalCards";

class Home extends React.Component {
  render() {
    return (
      <div>
      <div className="home">
              <Navbar sticky="top"/>
        <h1>Wild Life</h1>
       
      </div> 
       <AnimalCard/>
</div>
     
    );
  }
}

export default Home;
