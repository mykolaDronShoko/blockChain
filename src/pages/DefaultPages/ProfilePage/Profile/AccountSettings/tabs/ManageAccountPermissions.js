import React from "react";
import { Form, Icon, Input, Button, Upload } from "antd";

const FormItem = Form.Item;

@Form.create()
class ManageAccountPermissions extends React.Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="text-center">
        <Icon type="star" style={{ fontSize: "70px" }} />
        <p>You have no authorized applications.</p>
      </div>
    );
  }
}

export default ManageAccountPermissions;
