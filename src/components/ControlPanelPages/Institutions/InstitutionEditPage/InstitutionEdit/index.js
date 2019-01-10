import React from "react";
import { Input, Button, Form, Divider } from "antd";
import { FilePond, File, registerPlugin } from "react-filepond";
/* 
import { CURRENCIES, CURRENCIES_GET } from "../../../../../globalURL";
import { connect } from "react-redux";
import * as ax from "../../../../../services/axios-services";
import * as services from "../../../../../services/notifi-service"; */
import SubmitButton from "../../../../../pages/Adapters/SubmitButton";
import CancelButton from "../../../../../pages/Adapters/CancelButton";
import BaseContainer from "../../../../../pages/Adapters/BaseContainer";
import InputAdapter2 from "../../../../../pages/Adapters/InputAdapter2";
import SelectAdapter2 from "../../../../../pages/Adapters/SelectAdapter2";
import RangePickerAdapter2 from "../../../../../pages/Adapters/RangePickerAdapter2";
import TextAreaAdapter2 from "../../../../../pages/Adapters/TextAreaAdapter2";
import moment from "moment";
import DynamicInputAdapter from "../../../../../pages/Adapters/DynamicInputAdapter";
//import { connect } from "react-redux";

const FormItem = Form.Item;

const mapStateToProps = (state, props) => ({
  currencieEditMode: state.notifi.currencieEditMode
});

@Form.create()
class InstitutionEdit extends React.Component {
  state = {
    institution: {
      Id: "",
      Name: "",
      Address: "",
      Unit: "",
      City: "",
      Province: "",
      PostalCode: "",
      TelephoneNumber: "",
      FaxNumber: "",
      ContactEmail: "",
      WebSite: ""
    },
    instEditMode: false,
    loading: false
  };

  componentDidMount() {
    /* if (this.props.currencieEditMode) {
      const id = this.props.match.params.id;
      const token = window.localStorage.getItem("app.Authorization");
      this.getCurrencie(id, token);
    } */
  }

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
  /* updateCurrencie(formData, id) {
    ax.putMethod(CURRENCIES + "/" + id, formData)
      .then(response => {
        this.setState({ loading: false });
        services.openNotificationWithIcon(
          "success",
          "Currencie has been updated"
        );
      })
      .catch(error => {
        this.setState({ loading: false });
        services.openNotificationWithIcon(
          "error",
          "Currencie has not been updated"
        );
      });
  }
  getCurrencie(id) {
    ax.getMethod(CURRENCIES_GET + "/" + id)
      .then(response => {
        this.setState({ loading: false });
        this.setState({ currencie: response.data.result });
      })
      .catch(error => {
        this.setState({ loading: false });
        services.openNotificationWithIcon(
          "error",
          "Something went wrong. Please refresh the page"
        );
      });
  }

  addCurrencie(formData) {
    ax.postMethod(CURRENCIES, formData)
      .then(response => {
        this.setState({ loading: false });
        services.openNotificationWithIcon(
          "success",
          "Currencie has been added"
        );
      })
      .catch(error => {
        this.setState({ loading: false });
        services.openNotificationWithIcon(
          "success",
          "Currencie has not been added"
        );
      });
  } */
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  videoOnDrop = (error, f) => {
    /* this.setState({
      videoFile: video,
    }) */
    console.log(f.file);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      Name,
      Address,
      Unit,
      City,
      Province,
      PostalCode,
      TelephoneNumber,
      FaxNumber,
      ContactEmail,
      WebSite
    } = this.state.institution;
    const options = [{ value: 1, title: "1" }];
    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title ">
            <Divider>
              <strong>
                {this.state.instEditMode
                  ? "Institution Edit"
                  : "Add Institution"}
              </strong>
            </Divider>
          </div>
        </div>
        <div className="card-body">
          <Form
            hideRequiredMark={false}
            onSubmit={this.onSubmitForm}
            className="login-form"
          >
            <h5 className="mt-4">Choose Logo for Institution</h5>
            <FilePond
              allowMultiple={false}
              maxFiles={1}
              required
              onaddfile={this.videoOnDrop}
            />
            <BaseContainer>
              <InputAdapter2
                name="Name"
                value={Name}
                required
                placeholder="Name"
                form={this.props.form}
                lable="Name"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="Address"
                value={Address}
                required
                placeholder="Address"
                form={this.props.form}
                lable="Address"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="Unit"
                value={Unit}
                required
                placeholder="Unit"
                form={this.props.form}
                lable="Unit"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="City"
                value={City}
                required
                placeholder="City"
                form={this.props.form}
                lable="City"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="Province"
                value={Province}
                required
                placeholder="Province"
                form={this.props.form}
                lable="State/Province"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="PostalCode"
                value={PostalCode}
                required
                placeholder="PostalCode"
                form={this.props.form}
                lable="PostalCode"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="TelephoneNumber"
                value={TelephoneNumber}
                required
                placeholder="TelephoneNumber"
                form={this.props.form}
                lable="TelephoneNumber"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="FaxNumber"
                value={FaxNumber}
                required
                placeholder="NaFaxNumberme"
                form={this.props.form}
                lable="FaxNumber"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="ContactEmail"
                value={ContactEmail}
                required
                placeholder="ContactEmail"
                form={this.props.form}
                lable="ContactEmail"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="WebSite"
                value={WebSite}
                placeholder="WebSite"
                form={this.props.form}
                lable="WebSite"
              />
            </BaseContainer>

            <div className="form-actions">
              <SubmitButton
                text={this.state.courseEditMode ? "Save" : "Add"}
                loading={this.state.loading}
              />
              <CancelButton text="Cancel" />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default InstitutionEdit;
