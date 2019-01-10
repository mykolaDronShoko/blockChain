import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { REDUCER, submit } from "ducks/login";
import { Form, Input, Button, Icon, Select, DatePicker } from "antd";
import * as countries from "../../../ProfilePage/Profile/SettingsForm/countries.json";
import moment from "moment";

const FormItem = Form.Item;
const Option = Select.Option;
const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER]
});

@connect(mapStateToProps)
@Form.create()
class RegisterForm extends React.Component {
  static defaultProps = {};

  // $FlowFixMe
  onSubmit = isSubmitForm => event => {
    event.preventDefault();
    const { form, dispatch } = this.props;
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(submit(values));
        }
      });
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Please Sign Up</strong>
        </h4>
        <br />
        {/* <div className="mb-2">
          Email: <code>admin@mediatec.org</code> or <code>agent@mediatec.org</code>
        </div>
        <div className="mb-4">
          Password: <code>123123</code>
        </div> */}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("firstName", {
              rules: [
                { required: true, message: "Please input your FirstName!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="FirstName"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("secondName", {
              rules: [
                { required: true, message: "Please input your SecondName!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="SecondName"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("Country", {
              rules: [
                { required: true, message: "Please select your Country!" }
              ]
            })(
              <Select placeholder="Select a Country" style={{ width: "100%" }}>
                {countries.map(c => (
                  <Option key={c.name} value={c.name}>
                    {c.name}({c.code})
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("DateBirth", {
              rules: [
                { required: true, message: "Please input your Date of Birth!" }
              ]
            })(
              <DatePicker
                placeholder="Select a birthday"
                style={{ width: "100%" }}
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Create Account
            </Button>
            Already have an account? <Link to="/home/login">Sign in here</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
