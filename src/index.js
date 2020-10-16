import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";


import "./styles/reset.css";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/signup.css";
<<<<<<< HEAD
import "./styles/whatwedo.css";
import "./styles/kpis.css";
=======
import "./styles/animalCards.css";
>>>>>>> b4c762bc7e2079574cd2965b8744c855bc2686c1


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
