import React from "react";
import { Input, Form } from "antd";
const { TextArea } = Input;
const FormItem = Form.Item;
class TextAreaAdapter extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem>
        <label className="form-label mb-0">{this.props.lable}</label>
        {getFieldDecorator(`${this.props.name}`, {
          initialValue: `${this.props.value}`,
          rules: [
            {
              required: this.props.required,
              message: "This field is required"
            }
          ]
        })(<TextArea rows={4} placeholder={`${this.props.placeholder}`} />)}
      </FormItem>
    );
  }
}
export default TextAreaAdapter;
