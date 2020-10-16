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
          <h1>Wild Life</h1>
        </div>
        <Whatwedo/>
        <Kpis/>
        <AnimalCard/>
      </div>
    );
  }
}

export default Home;
