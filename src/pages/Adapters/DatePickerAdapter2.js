import React from "react";
import { Form, DatePicker } from "antd";
const FormItem = Form.Item;
class DatePickerAdapter2 extends React.Component {
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
          rules: [
            {
              required: this.props.required,
              message: "This field is required"
            }
          ]
        })(
          <DatePicker
            style={{ width: "100%" }}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
          />
        )}
      </FormItem>
    );
  }
}
export default DatePickerAdapter2;
