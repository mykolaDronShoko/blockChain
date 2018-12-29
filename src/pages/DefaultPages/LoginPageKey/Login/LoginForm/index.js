import React from "react";
import { connect } from "react-redux";
import { REDUCER, submit } from "ducks/login";
import { Link } from "react-router-dom";
import { Form, Input, Button, Icon, Checkbox } from "antd";
import InputAdapter from "../../../../Adapters/InputAdapter";

const FormItem = Form.Item;

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER]
});

@connect(mapStateToProps)
@Form.create()
class LoginForm extends React.Component {
  static defaultProps = {};

  // $FlowFixMe
  onSubmitForm = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    return (
      <div className="cat__pages__login__block__form">
        <h5 className="text-black mt-4">
          <strong>Credentials on Blockchain</strong>
        </h5>
        <br />
        {/* <div className="mb-2">
          Email: <code>admin@mediatec.org</code> or <code>agent@mediatec.org</code>
        </div>
        <div className="mb-4">
          Password: <code>123123</code>
        </div> */}
        <Form
          layout="horizontal"
          onSubmit={this.onSubmitForm}
          className="login-form"
        >
          <InputAdapter
            placeholder="Access Key"
            name="key"
            form={this.props.form}
            value=""
            required={true}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{" "}
            <Link to="/login">
              Sign in to the account you would like to merge.
            </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
