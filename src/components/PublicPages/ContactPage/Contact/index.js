import React from "react";
import { Input, Button, Form, Divider, Spin, Icon, Rate } from "antd";
import InputAdapter from "../../../../pages/Adapters/InputAdapter";
import CheckboxAdapter from "../../../../pages/Adapters/CheckboxAdapter";
import TextAreaAdapter from "../../../../pages/Adapters/TextAreaAdapter";
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
const FormItem = Form.Item;
const { TextArea } = Input;

@Form.create()
class Contact extends React.Component {
  state = {
    magic: {
      Description: "",
      SeoTitle: "",
      Title: "FeedBack",
      Content: "",
      SeoDescription: ""
    },
    loading: false,
    value: 0
  };
  _isMounted = false;
  componentDidMount() {
    /*  this._isMounted = true
    this.getMagic(5) */
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  onSubmitForm = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleChange = value => {
    this.setState({ value });
  };
  /* getMagic(type) {
    ax.getMethod(MAGIC + '/' + type)
      .then(response => {
        if (this._isMounted) {
          this.setState({ magic: response.data.result })
        }
      })
      .catch(error => {
        this.setState({ loading: false })
        services.openNotificationWithIcon('error', 'Something wrong!!!')
      })
  } */
  render() {
    const { value } = this.state;
    const { Title, Content, Description } = this.state.magic;
    const antIcon = <Icon type="loading" style={{ fontSize: 32 }} spin />;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mt-4">
                <div className="card-body">
                  <div className="mt-1 pb-1">
                    {this.state.magic.Title !== "" ? (
                      <span>
                        <h1 className="pl-3">{Title}</h1>
                        <p className="pl-3">
                          <small>{Description}</small>
                        </p>
                      </span>
                    ) : (
                      <span style={{ marginLeft: "50%" }}>
                        <Spin indicator={antIcon} />
                      </span>
                    )}

                    <Divider />
                  </div>
                  <Form
                    hideRequiredMark={false}
                    onSubmit={this.onSubmitForm}
                    className="login-form"
                  >
                    <h4>Where else would you like to share your badge?</h4>
                    <CheckboxAdapter
                      form={this.props.form}
                      label="Instagram"
                      value={false}
                      name="Instagram"
                    />
                    <CheckboxAdapter
                      form={this.props.form}
                      label="Text message (SMS)"
                      value={false}
                      name="Text"
                    />
                    <CheckboxAdapter
                      form={this.props.form}
                      label="Pinterest"
                      value={false}
                      name="Pinterest"
                    />
                    <CheckboxAdapter
                      form={this.props.form}
                      label="PinterestSlack"
                      value={false}
                      name="PinterestSlack"
                    />
                    <CheckboxAdapter
                      form={this.props.form}
                      label="Other"
                      value={false}
                      name="Other"
                    />
                    <InputAdapter
                      form={this.props.form}
                      name="OtherText"
                      value=""
                      placeholder=""
                      required={true}
                    />
                    <h4>
                      On a scale of 1 to 10, how likely are you to recommend
                      BlockCertsPOC to a friend?
                    </h4>
                    <span>
                      <Rate
                        onChange={this.handleChange}
                        value={value}
                        count={10}
                      />
                      {value && (
                        <span className="ant-rate-text">{value} stars</span>
                      )}
                    </span>
                    <span style={{ marginTop: "10.2rem" }}>
                      <h4>Something else you'd like to suggest?</h4>
                    </span>
                    <TextAreaAdapter
                      form={this.props.form}
                      value=""
                      name="suggest"
                      placeholder=""
                    />
                    <div className="form-actions">
                      <Button
                        style={{ width: 150 }}
                        type="primary"
                        htmlType="submit"
                        className="mr-3"
                        loading={this.state.loading}
                      >
                        Sent
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
