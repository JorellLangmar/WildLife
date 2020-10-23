import React from "react";
import apiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserContext } from "../Auth/UserContext";
import { LockOutlined } from '@ant-design/icons';


import "../../styles/signup.css";

class FormSizeDemo extends React.Component {
    static contextType = UserContext;

  state = {
    componentSize: "default",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
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
    // event.preventDefault();
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
      <div className="formSU">
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
          style={{ paddingLeft: "50%", paddingTop: "10%" }}
        >
          {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
          <Form.Item label="" style={{ fontSize: "150%" }}>
            First Name
            <Input name="firstname" />
          </Form.Item>
          <Form.Item label="" style={{ fontSize: "150%" }}>
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
          <Form.Item
            label=""
            style={{ fontSize: "150%" }}
            rules={[{ type: "email" }]}
          >
            Email
            <Input name="email" />
          </Form.Item>
          <Form.Item
            label=""
            style={{ fontSize: "150%" }}
            rules={[{ type: "password" }]}
          >
            Password
            <Input name="password" prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"/>
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
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(FormSizeDemo);
