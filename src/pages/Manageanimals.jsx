import React, { Component } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

export default class Manageanimals extends Component {
  state = {
    animals: [],
  };

  componentDidMount = () => {
    apiHandler
      .getAll("/")
      .then((apiRes) => {
        console.log(apiRes);
        this.setState({ animals: apiRes });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  };

  deleteAnimal = (id) => {
    // event.preventDefault();
    console.log(id);
    apiHandler.deleteAnimal("/" + id).catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="table-manage">
          <div>
            <Table celled compact definition>
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Profile Image</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Edit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.animals.map((animal, i) => {
                  return (
                    <Table.Row key={i}>
                      <Table.Cell collapsing>
                        <Icon
                          onClick={() => this.deleteAnimal(animal._id)}
                          name="trash alternate"
                        />
                      </Table.Cell>
                      <Table.Cell style={{ width: "20%" }}>
                        {" "}
                        <img
                          style={{ width: "100%", borderRadius: "10px" }}
                          src={animal.profileImage}
                          alt="animal"
                        />
                      </Table.Cell>
                      <Table.Cell>{animal.name}</Table.Cell>
                      <Table.Cell>{animal.description}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        <Link to={`/Animals/${animal._id}/edit`}>
                          <Icon name="edit" />
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>

              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="4">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                    >
                      <Icon name="user" />{" "}
                      <a href="/Createanimals">Add Animal</a>
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
