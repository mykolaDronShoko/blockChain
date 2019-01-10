import React from "react";
import { Form, Checkbox } from "antd";

const FormItem = Form.Item;
class CheckboxAdapter2 extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 18 }
      }
    };
    return (
      <FormItem {...formItemLayout} label={this.props.lable}>
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
export default CheckboxAdapter2;
