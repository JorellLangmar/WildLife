import React from "react";
import FormSizeDemo from "../components/Forms/Signup";
import Navbar from "../components/Navbar";

const Signup = (props) => {
  return (
      <div className="signupPage">
       <Navbar />
        <FormSizeDemo />
      </div>
  );
};

export default Signup;
