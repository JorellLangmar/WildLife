import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import "../styles/NavMain.css";

const NavBar = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" variant="light" style={{backgroundColor:"transparent"}}>
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          {/* </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link>
            {context.isLoggedIn && (
              <React.Fragment>
                <li>
                  <NavLink to="/profile">
                    {context.user && context.user.email}
                  </NavLink>
                </li>
                <li>
                  <p onClick={handleLogout}>Logout</p>
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
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withUser(NavBar);
