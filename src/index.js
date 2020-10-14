import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>;
<script>
  AOS.init();
</script>

import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
