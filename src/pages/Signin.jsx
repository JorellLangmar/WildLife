import React from "react";
import FormSignin from "../components/Forms/FormSignin";
import Navbar from "../components/Navbar";
import "../styles/signin.css";

const Signin = (props) => {
  return <div className="signinPage">
    <Navbar />
    <FormSignin />
    </div>
};

export default Signin;
