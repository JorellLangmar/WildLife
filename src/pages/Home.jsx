import React from "react";
import Navbar from "../components/Navbar";
import Whatwedo from "../components/Whatwedo";
import Kpis from "../components/Kpis";
import AnimalCard from "../components/AnimalCards";

class Home extends React.Component {
  render() {
    return (
      <div>
        
        <div className="home">
          <Navbar />
        <div data-aos="fade-up">  
          <h1>R.O.A.R.</h1>
          <h2>Reach Out And Rescue</h2>
        </div>
        </div>
        <div data-aos="fade-up"> 
        <Whatwedo/>
        </div>
        <div data-aos="fade-up">  
        <Kpis/>
        </div>
        <div data-aos="fade-up">  
        <AnimalCard/>
        </div>
      </div>
    );
  }
}

export default Home;
