import React from "react";
import { Form, Icon, Input, Button, Upload } from "antd";
import InputAdapter from "../../../../Adapters/InputAdapter";

const FormItem = Form.Item;

@Form.create()
class ChangePassword extends React.Component {
  state = {
    confirmDirty: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("Password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirmPassword"], { force: true });
    }
    callback();
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h5 className="text-black mt-4">
          <strong>New Password</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <InputAdapter
              name="Password"
              value=""
              placeholder=""
              form={this.props.form}
              lable="Password"
              validator={this.validateToNextPassword}
            />
          </div>
          <div className="col-lg-6">
            <InputAdapter
              name="confirmPassword"
              value=""
              placeholder=""
              form={this.props.form}
              lable="Confirm Password"
              validator={this.compareToFirstPassword}
              onBlur={this.handleConfirmBlur}
            />
          </div>
        </div>
        <div className="form-actions">
          <Button
            style={{ width: 150 }}
            type="primary"
            htmlType="submit"
            className="mr-3"
          >
            Submit
          </Button>
          <Button htmlType="submit">Cancel</Button>
        </div>
      </Form>
    );
  }
}

export default ChangePassword;
