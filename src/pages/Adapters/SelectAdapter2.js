import React from "react";
import { Select, Form } from "antd";
const Option = Select.Option;
const FormItem = Form.Item;
class SelectAdapter2 extends React.Component {
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
          <Select style={{ width: "100%" }} onChange={this.props.onChange}>
            <Option value={null}>none</Option>
            {this.props.options.map(o => (
              <Option key={o.title} value={o.value}>
                {o.title}
              </Option>
            ))}
          </Select>
        )}
      </FormItem>
    );
  }
}
export default SelectAdapter2;
