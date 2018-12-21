import React from "react";
import { Form, Checkbox } from "antd";

const FormItem = Form.Item;
class CheckboxAdapter extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem>
        {getFieldDecorator(`${this.props.name}`, {
          initialValue: this.props.value,
          valuePropName: "checked",
          rules: [
            {
              required: false
            }
          ]
        })(<Checkbox>{this.props.label}</Checkbox>)}
      </FormItem>
    );
  }
}
export default CheckboxAdapter;
