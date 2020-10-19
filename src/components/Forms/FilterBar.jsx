import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import "../styles/NavMain.css";

const FilterBar = (props) => {
  const { context } = props;
  // console.log(context);

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="light" style={{backgroundColor:"transparent"}}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
        {}
          <Nav.Link eventKey={4}>
            {context.isAdmin && (
                <React.Fragment>
                <li>
                <NavLink to="/ManageAnimals">Manage Animals</NavLink>
                </li>
              </React.Fragment>
            )}
          </Nav.Link>
          <Nav.Link eventKey={3}>
            {context.isAdmin && (
                <React.Fragment>
                <li>
                <NavLink to="/CreateAnimals">Create Animals</NavLink>
                </li>
              </React.Fragment>
            )}
          </Nav.Link>
          <Nav.Link>
            {context.isLoggedIn && (
              <React.Fragment>
                <li>
                  <NavLink to="/profile">
                    {context.user && context.user.email}
                  </NavLink>
                </li>
                </React.Fragment>
            )}
            
            {!context.isLoggedIn && (
              <React.Fragment>
                <li>
                  <NavLink to="/signin">Log in</NavLink>
                </li>
              </React.Fragment>
            )}
          </Nav.Link>
          <Nav.Link eventKey={2}>
          {!context.isLoggedIn && (
              <React.Fragment>
                <li>
                  <NavLink to="/signup">Create account</NavLink>
                </li>
              </React.Fragment>
            )}
            {context.isLoggedIn && (
                <React.Fragment>
                <li>
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </React.Fragment>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withUser(FilterBar);
