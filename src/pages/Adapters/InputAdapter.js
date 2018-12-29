import React from "react";
import { Input, Form } from "antd";

const FormItem = Form.Item;
class InputAdapter extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 16 }
      }
    };
    return (
      <FormItem>
        <label className="form-label mb-0">{this.props.lable}</label>
        {getFieldDecorator(`${this.props.name}`, {
          initialValue: `${this.props.value}`,
          rules: [
            {
              required: this.props.required,
              message: "This field is required"
            },
            {
              validator: this.props.validator
            }
          ]
        })(
          <Input
            prefix={this.props.prefix}
            placeholder={`${this.props.placeholder}`}
            onBlur={this.props.onBlur}
          />
        )}
      </FormItem>
    );
  }
}
export default InputAdapter;
