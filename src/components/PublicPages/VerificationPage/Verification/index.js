import React from "react";
import { Input, Button, Form, Divider, Spin, Icon, Rate } from "antd";
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import InputAdapter from "../../../../pages/Adapters/InputAdapter";
import SelectAdapter from "../../../../pages/Adapters/SelectAdapter";
import SubmitButton from "../../../../pages/Adapters/SubmitButton";
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
const Search = Input.Search;
@Form.create()
class Verification extends React.Component {
  state = {
    magic: {
      Description: "Verification page",
      SeoTitle: "",
      Title: "Verification",
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
  videoOnDrop = (error, f) => {
    /* this.setState({
      videoFile: video,
    }) */
    console.log(f.file);
  };
  onSubmitForm = e => {
    e.preventDefault();
    const { getFieldValue, validateFields } = this.props.form;
    /* const id = this.props.match.params.id;
    const formData = {
      ...this.state.currencie,
      Name: getFieldValue("Name"),
      Code: getFieldValue("Code")
    }; */
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
        /* this.setState({ loading: true });
        if (this.props.currencieEditMode) {
          this.updateCurrencie(formData, id);
        } else {
          this.addCurrencie(formData);
        } */
      }
    });
  };
  render() {
    const options = [{ value: 1, title: "1" }];
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
                  <Form onSubmit={this.onSubmitForm} className="login-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <InputAdapter
                          name="FirstName"
                          value=""
                          placeholder=""
                          form={this.props.form}
                          lable="First Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <InputAdapter
                          name="LastName"
                          value=""
                          placeholder=""
                          form={this.props.form}
                          lable="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      {/* <div className="col-lg-6">
                        <SelectAdapter
                          name="Country"
                          placeholder=""
                          value={this.state.country}
                          options={options}
                          form={this.props.form}
                          lable="Country"
                          onChange={this.handleChange}
                        />
                      </div> */}
                      <div className="col-lg-6">
                        <InputAdapter
                          name="City"
                          value=""
                          placeholder=""
                          form={this.props.form}
                          lable="City"
                        />
                      </div>
                      <div className="col-lg-6">
                        <InputAdapter
                          name="CertificateHash"
                          value=""
                          placeholder=""
                          form={this.props.form}
                          lable="Certificate hash"
                        />
                      </div>
                    </div>
                    <div className="form-actions">
                      <SubmitButton
                        text="Verify"
                        loading={this.state.loading}
                      />
                    </div>
                  </Form>
                  <h5 className="mt-4">Choose JSON file</h5>
                  <FilePond
                    allowMultiple={false}
                    maxFiles={1}
                    onaddfile={this.videoOnDrop}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Verification;
