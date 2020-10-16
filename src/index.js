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


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
