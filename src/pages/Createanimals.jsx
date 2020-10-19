import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Form, Button} from "semantic-ui-react";
import apiHandler from "../api/apiHandler";

const options = [
  { key: "m", text: "Male", value: "Male" },
  { key: "f", text: "Female", value: "Female" },
];

class CreateAnimals extends Component {
  state = {
    name: "",
    profileImage: "",
    age: "",
    specie: "",
    description: "",
    ConservationStatus: "",
    gender: "",
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0].name
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSelectChange = (e, { value }) => {
    this.setState({
      gender: value,
    });
  };

  handleRadioChange = (e, { value }) => {
    this.setState({
      ConservationStatus: value,
    });
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    apiHandler
      .createAnimal(this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="createanimals">
        <Navbar />
        <Form style={{ padding: "15%" }}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Age"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Specie"
              placeholder="Specie"
              name="specie"
              onChange={this.handleChange}
            />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
              name="gender"
              onChange={this.handleSelectChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Conservation Status</label>
            <Form.Radio
              label="Critical"
              value="Critical"
              checked={value === "Critical"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Vulnerable"
              value="Vulnerable"
              checked={value === "Vulnerable"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Least Concerned"
              value="Least Concerned"
              checked={value === "Least Concerned"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Near Threatened"
              value="Near Threatened"
              checked={value === "Near Threatened"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Data Deficient"
              value="Data Deficient"
              checked={value === "Data Deficient"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Endangered"
              value="Endangered"
              checked={value === "Endangered"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Description"
            placeholder="Tell us more about our new companion..."
            onChange={this.handleChange}
            name="description"
          />
          <Button as="label" htmlFor="file" type="button">
            Upload a cute face
          </Button>
          <Form.Input
            type="file"
            id="file"
            style={{ visibility: "hidden" }}
            onChange={this.handleChange}
            name="profileImage"
          />
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default CreateAnimals;
