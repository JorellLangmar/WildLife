import React from "react";
import "../styles/profile.css";
import Navbar from "../components/Navbar";
import { withUser } from "../components/Auth/withUser";

const Profile = (props) => {
  const { context } = props;
  return (
    <div className="profilePage">
    <Navbar />

<div className="profile-cards">
      <div className="profile">
        <h2>My Profile</h2>
        <p>First Name : {context.user.firstname}</p>
        <p>Last Name : {context.user.lastname}</p>
        <p>Email : {context.user.email}</p>
        <p>Address : {context.user.adress}</p>
        <p>Phone : {context.user.phone}</p>
      </div>

      <div className="favorites">
       <h2>My animals</h2>
      </div>

      <div className="sponsoring">
       <h2>My sponsorships</h2>
      </div>

      <div className="adoptions">
       <h2>My adoptions</h2>
      </div>
</div>

    </div>
  );
};

export default withUser(Profile);
