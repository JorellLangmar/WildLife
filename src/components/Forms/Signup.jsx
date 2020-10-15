import React from "react";
import apiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import {
  Row,
  Card,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

import "../../styles/signup.css";

class FormSizeDemo extends React.Component {
  state = {
    componentSize: "default",
    email: "",
    password: "",
  };

  // const [componentSize, setComponentSize] = useState('default');

  onFormLayoutChange = ({ size }) => {
    this.setState({ componentSize: size });
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="vertical"
          initialValues={{
            size: this.state.componentSize,
          }}
          onValuesChange={this.onFormLayoutChange}
          size={this.state.componentSize}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          style={{marginLeft:"50%", marginTop:"10%"}}
        >
          {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
          <Form.Item label="" style={{fontSize:"150%"}}>
            First Name
            <Input name="" />
          </Form.Item>
          <Form.Item label="" style={{fontSize:"150%"}}>
            Last Name
            <Input name="lastname" />
          </Form.Item>
          {/* <Form.Item label="" style={{fontSize:"150%"}}>
            Address
            <Input name="address" />
          </Form.Item>
          <Form.Item label="" style={{fontSize:"150%"}}>
            Phone Number
            <Input name="phone" />
          </Form.Item> */}
          <Form.Item label="" style={{fontSize:"150%"}}>
            Email
            <Input name="email" />
          </Form.Item>
          <Form.Item label="" style={{fontSize:"150%"}}>
            Password
            <Input name="password" />
          </Form.Item>
          {/* <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item> */}
          {/* <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item> */}
          {/* <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item> */}
          {/* <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item> */}
          {/* <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item> */}
          {/* <Form.Item label="Switch">
            <Switch />
          </Form.Item> */}
          <Form.Item label="">
            <Button>Submit</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default withRouter(FormSizeDemo);
