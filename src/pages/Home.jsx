import React from "react";
import Navbar from "../components/Navbar";
import Whatwedo from "../components/Whatwedo";
import Kpis from "../components/Kpis";
import AnimalCard from "../components/AnimalCards";

class Home extends React.Component {
  render() {
    return (
      <div>
          <Navbar />
        <div className="home">
          <h1>R.O.A.R.</h1>
          <h2>Reach Out And Rescue</h2>
        </div>
        <Whatwedo/>
        <Kpis/>
        <AnimalCard/>
      </div>
    );
  }
}

export default Home;
