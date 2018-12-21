import React from "react";
import { Select, Form } from "antd";
const Option = Select.Option;
const FormItem = Form.Item;
class SelectAdapter extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem>
        <label className="form-label mb-0">{this.props.lable}</label>
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
export default SelectAdapter;
