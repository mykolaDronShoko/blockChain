import React from "react";
import { Form, DatePicker } from "antd";
const FormItem = Form.Item;
class DatePickerAdapter extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem>
        <label className="form-label mb-0">{this.props.lable}</label>
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
export default DatePickerAdapter;
