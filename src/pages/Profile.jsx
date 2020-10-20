import React from "react";
import { withUser } from "../components/Auth/withUser";


const Profile = (props) => {
  const { context } = props;
  console.log(context);
  return (
    <div>
      <h1>Protected profile</h1>
      <p>{context.user.firstname}</p>
    </div>
  );
};

export default withUser(Profile);
