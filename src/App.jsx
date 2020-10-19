import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import CreateAnimals from "./pages/Createanimals";
import ManageAnimals from "./pages/Manageanimals";
import AnimalDetail from "./components/AnimalDetail";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Createanimals" component={CreateAnimals} />
          <Route exact path="/Manageanimals" component={ManageAnimals} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/:id" component={AnimalDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
