import React from "react";
import { Form, DatePicker } from "antd";
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
class RangePickerAdapter2 extends React.Component {
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
          rules: [
            {
              required: this.props.required,
              message: "This field is required"
            }
          ]
        })(
          <RangePicker
            style={{ width: "100%" }}
            onChange={this.props.onChange}
          />
        )}
      </FormItem>
    );
  }
}
export default RangePickerAdapter2;
