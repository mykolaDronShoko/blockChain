import React from "react";
import { Input, Form, Button, Icon } from "antd";
let id = 0;

class DynamicInputAdapter extends React.Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(`${this.props.name}`);
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(`${this.props.name}`);
    const nextKeys = keys.concat(++id);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
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
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    };
    getFieldDecorator(`${this.props.name}`, { initialValue: this.props.value });
    const keys = getFieldValue(`${this.props.name}`);
    const formItems = keys.map((k, index) => (
      <Form.Item {...formItemLayout} label={this.props.lable} key={k}>
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ["onChange", "onBlur"],
          initialValue: this.props.value[index],
          rules: [
            {
              required: this.props.required,
              whitespace: true,
              message: "This field is required."
            }
          ]
        })(
          <Input
            placeholder={this.props.placeholder}
            style={{ width: "93%", marginRight: 8 }}
          />
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <dvi>
        {formItems}
        <Form.Item {...formItemLayout} label="Add Course Result">
          <Button type="dashed" onClick={this.add} style={{ width: "100%" }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
      </dvi>
    );
  }
}

export default DynamicInputAdapter;
