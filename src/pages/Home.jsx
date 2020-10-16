import React from "react";
import Navbar from "../components/Navbar";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
              <Navbar sticky="top"/>
        <h1>Wild Life</h1>
      </div>
    );
  }
}

export default Home;
