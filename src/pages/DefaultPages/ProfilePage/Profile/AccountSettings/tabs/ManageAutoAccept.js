import React from "react";
import { Form, Icon, Input, Button, Upload } from "antd";

const FormItem = Form.Item;

@Form.create()
class ManageAutoAccept extends React.Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="text-center">
        <p>Organizations can be added to this list when you accept a badge.</p>
        <Icon type="select" style={{ fontSize: "70px" }} />
        <p>No organizations have been added.</p>
      </div>
    );
  }
}

export default ManageAutoAccept;
