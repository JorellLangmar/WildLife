import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";


import "./styles/reset.css";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/signup.css";
import "./styles/whatwedo.css";
import "./styles/kpis.css";
import "./styles/animalCards.css";
import "./styles/animalCardsProfile.css";
import "./styles/createanimals.css";
import "./styles/animalDetail.css";
import "./styles/manageAnimals.css";
import "./styles/profile.css";
import "./styles/signin.css";


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
