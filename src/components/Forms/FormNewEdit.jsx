import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import apiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";

const options = [
  { key: "m", text: "Male", value: "Male" },
  { key: "f", text: "Female", value: "Female" },
];

class AddEditAnimal extends Component {
  state = {
    name: "",
    profileImage: "",
    age: "",
    specie: "",
    description: "",
    ConservationStatus: "",
    gender: "",
  };

  componentDidMount = () => {
    if (this.props.action === "edit") {
      console.log(this.props);
      apiHandler
        .getOne("/api/animal/", this.props.id)
        .then((animal) => {
          console.log(animal);
          this.setState({
            name: animal.data.name,
            description: animal.data.description,
            age: animal.data.age,
            specie: animal.data.specie,
            gender: animal.data.gender,
            ConservationStatus: animal.data.ConservationStatus,
            profileImage: animal.data.profileImage,
          });
        })
        .catch((err) => console.log(err));
    }
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
    if (this.props.action === "edit") {
      const fd = new FormData();
      for (let key in this.state) {
        fd.append(key, this.state[key]);
      }
      console.log("=======>", fd);
      apiHandler
        .editAnimal(this.props.id, fd)
        .then(() => {
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const fd = new FormData();
      for (let key in this.state) {
        fd.append(key, this.state[key]);
      }
      apiHandler
        .createAnimal(fd)
        .then(() => {
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { value } = this.state;
    // console.log(value);
    return (
      <div className="createanimals">
        <Form style={{ padding: "15%" }}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Form.Input
              fluid
              label="Age"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
            />
            <Form.Input
              fluid
              label="Specie"
              placeholder="Specie"
              name="specie"
              onChange={this.handleChange}
              value={this.state.specie}
            />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
              name="gender"
              onChange={this.handleSelectChange}
              value={this.state.gender}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Conservation Status</label>
            <Form.Radio
              label="Critical"
              value="Critical"
              checked={this.state.ConservationStatus === "Critical"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Vulnerable"
              value="Vulnerable"
              checked={this.state.ConservationStatus === "Vulnerable"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Least Concerned"
              value="Least Concerned"
              checked={this.state.ConservationStatus === "Least Concerned"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Near Threatened"
              value="Near Threatened"
              checked={this.state.ConservationStatus === "Near Threatened"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Data Deficient"
              value="Data Deficient"
              checked={this.state.ConservationStatus === "Data Deficient"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
            <Form.Radio
              label="Endangered"
              value="Endangered"
              checked={this.state.ConservationStatus === "Endangered"}
              name="ConservationStatus"
              onChange={this.handleRadioChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Description"
            placeholder="Tell us more about our new companion..."
            onChange={this.handleChange}
            name="description"
            value={this.state.description}
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
            // value = {this.state.profileImage}
          />
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddEditAnimal);
