import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar sticky="top" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
