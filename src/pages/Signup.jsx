import React from "react";
import FormSizeDemo from "../components/Forms/Signup";
import Navbar from "../components/Navbar";

const Signup = (props) => {
  return (
    <div>
      <Navbar />
      <div className="signupPage">
        <FormSizeDemo />
      </div>
    </div>
  );
};

export default Signup;
