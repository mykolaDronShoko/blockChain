import React from "react";
import { Form, Icon, Input, Button, Upload } from "antd";
import CheckboxAdapter from "../../../../../Adapters/CheckboxAdapter";

const FormItem = Form.Item;

@Form.create()
class General extends React.Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="row">
          <div className="col-lg-6">
            <FormItem>
              <label className="form-label mb-0">Email</label>
              {getFieldDecorator("email", {
                rules: [{ required: false }]
              })(<Input placeholder="Email" />)}
            </FormItem>
          </div>
          <div className="col-lg-6">
            <FormItem>
              <label className="form-label mb-0">BlockChain URL</label>
              {getFieldDecorator("BlockChain", {
                rules: [{ required: false }]
              })(<Input placeholder="http://" />)}
            </FormItem>
          </div>
        </div>
        <h5 className="text-black mt-4">
          <strong>Preferences</strong>
        </h5>
        <div className="row">
          <div className="col-lg-12">
            <CheckboxAdapter
              form={this.props.form}
              label="Send me news and updates on professional growth opportunities."
              value={false}
              name="MarketingEmails"
            />
          </div>
          <div className="col-lg-12">
            <CheckboxAdapter
              form={this.props.form}
              label="Allow users to search for me and contact me using my public profile."
              value={false}
              name="TalentMatch"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CheckboxAdapter
              form={this.props.form}
              label="Send me notifications for activities related to my account such as when a badge is issued to me or updated."
              value={false}
              name="NotificationEmails"
            />
          </div>
          <div className="col-lg-12">
            <CheckboxAdapter
              form={this.props.form}
              label="Send me email notifications when another user shares a badge with me."
              value={false}
              name="BadgeSharingEmails"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CheckboxAdapter
              form={this.props.form}
              label="Require two factor authentication for accessing Acclaim."
              value={false}
              name="TwoFactorAuthentication"
            />
          </div>
          <div className="col-lg-12" />
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

export default General;
