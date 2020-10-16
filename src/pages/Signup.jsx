import React from "react";
import FormSizeDemo from "../components/Forms/Signup";
import Navbar from "../components/Navbar";

const Signup = (props) => {
  return (
    <div className="signupPage">
      <Navbar sticky="top" />
        <FormSizeDemo className='signup'/>
    </div>
  );
};

export default Signup;
