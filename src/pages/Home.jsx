import React from "react";
import Navbar from "../components/Navbar";
import Whatwedo from "../components/Whatwedo";
import Kpis from "../components/Kpis";

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
      </div>
    );
  }
}

export default Home;
