import React from "react";
import { Form, Icon, Button, Upload } from "antd";
import InputAdapter from "../../../../Adapters/InputAdapter";
import SelectAdapter from "../../../../Adapters/SelectAdapter";
import * as countries from "./countries";
import * as timezones from "./timezones";
import TextAreaAdapter from "../../../../Adapters/TextAreaAdapter";
import DatePickerAdapter from "../../../../Adapters/DatePickerAdapter";

@Form.create()
class SettingsForm extends React.Component {
  state = {
    country: "United Kingdom"
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleChange = country => {
    this.setState({ country });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h5 className="text-black mt-4">
          <strong>Personal Information</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <InputAdapter
              name="FirsName"
              value=""
              placeholder=""
              form={this.props.form}
              lable="FirsName"
            />
          </div>
          <div className="col-lg-6">
            <InputAdapter
              name="LastName"
              value=""
              placeholder=""
              form={this.props.form}
              lable="LastName"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <SelectAdapter
              name="Country"
              placeholder=""
              value={this.state.country}
              options={countries.map(c => ({
                value: `${c.name}`,
                title: `${c.name}(${c.code})`
              }))}
              form={this.props.form}
              lable="Country"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <InputAdapter
              name="City"
              value=""
              placeholder=""
              form={this.props.form}
              lable="City"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TextAreaAdapter
              lable="Bio"
              form={this.props.form}
              name="Bio"
              value=""
              placeholder=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <InputAdapter
              name="WebsiteURL"
              value=""
              placeholder="http://"
              form={this.props.form}
              lable="Website URL"
            />
          </div>
          <div className="col-lg-6">
            <InputAdapter
              name="ZIP"
              value=""
              placeholder=""
              form={this.props.form}
              lable="ZIP/Postal Code"
            />
          </div>
        </div>
        <h5 className="text-black mt-4 mb-3">
          <strong>
            This information does not appear on your public profile.
          </strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <InputAdapter
              name="CurrentEmployer"
              value=""
              placeholder=""
              form={this.props.form}
              lable="Current Employer"
            />
          </div>
          <div className="col-lg-6">
            <InputAdapter
              name="CurrentPosition"
              value=""
              placeholder=""
              form={this.props.form}
              lable="Current Position"
            />
          </div>
          <div className="col-lg-6">
            <DatePickerAdapter
              name="Birthdate"
              placeholder="Select date"
              form={this.props.form}
              lable="Birth date"
              required
            />
          </div>
        </div>
        <h5 className="text-black mt-4 mb-3">
          <strong>Set your time zone.</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <SelectAdapter
              name="timezone"
              placeholder=""
              value=""
              options={timezones.map(c => ({
                value: c.offset,
                title: c.text
              }))}
              form={this.props.form}
              lable="Time Zone"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h5 className="text-black mt-4 mb-3">
              <strong>Profile Avatar</strong>
            </h5>
            <Upload>
              <Button size="small">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
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

export default SettingsForm;
