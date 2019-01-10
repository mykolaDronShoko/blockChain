import React from "react";
import { Button, Form, Divider } from "antd";

/* 
import { CURRENCIES, CURRENCIES_GET } from "../../../../../globalURL";
import { connect } from "react-redux";
import * as ax from "../../../../../services/axios-services";
import * as services from "../../../../../services/notifi-service"; */
// Require Editor JS files.
import moment from "moment"; /* 
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Require Font Awesome.
import "font-awesome/css/font-awesome.css"; */

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import SelectAdapter2 from "../../../../../pages/Adapters/SelectAdapter2";
import BaseContainer from "../../../../../pages/Adapters/BaseContainer";
import InputAdapter2 from "../../../../../pages/Adapters/InputAdapter2";
import TextAreaAdapter2 from "../../../../../pages/Adapters/TextAreaAdapter2";
import SubmitButton from "../../../../../pages/Adapters/SubmitButton";
import CancelButton from "../../../../../pages/Adapters/CancelButton";
import DatePickerAdapter2 from "../../../../../pages/Adapters/DatePickerAdapter2";
import AddButton from "../../../../../pages/Adapters/AddButton";
import CheckboxAdapter from "../../../../../pages/Adapters/CheckboxAdapter";
import CheckboxAdapter2 from "../../../../../pages/Adapters/CheckboxAdapter2";
//import { connect } from "react-redux";

const FormItem = Form.Item;

const mapStateToProps = (state, props) => ({
  currencieEditMode: state.notifi.currencieEditMode
});

@Form.create()
class Credential extends React.Component {
  state = {
    model: "Example text"
  };
  handleModelChange = model => {
    this.setState({
      model: model
    });
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
  render() {
    const options = [{ value: 1, title: "1" }];
    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title ">
            <Divider>
              <strong>Credential Recording</strong>
            </Divider>
          </div>
        </div>
        <div className="card-body">
          <Form
            hideRequiredMark={false}
            onSubmit={this.onSubmitForm}
            className="login-form"
          >
            <BaseContainer>
              <SelectAdapter2
                name="Institution"
                value=""
                placeholder="Select Institution"
                form={this.props.form}
                lable="Select Institution"
                options={options}
              />
            </BaseContainer>
            <div className="row">
              <div className="col-6">
                <SelectAdapter2
                  name="Course"
                  value=""
                  placeholder="Select Course"
                  form={this.props.form}
                  lable="Select Course"
                  options={options}
                />
              </div>
              <div className="col-3">
                <AddButton url="/controlpanel/courses/add-course" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <SelectAdapter2
                  name="Student"
                  value=""
                  placeholder="Select Student"
                  form={this.props.form}
                  lable="Select Student"
                  options={options}
                />
              </div>
              <div className="col-3">
                <AddButton url="/controlpanel/users/add-user" />
              </div>
            </div>

            <BaseContainer>
              <DatePickerAdapter2
                name="CompletionDate"
                value=""
                placeholder="CompletionDate"
                form={this.props.form}
                lable="Completion Date"
              />
            </BaseContainer>
            <BaseContainer>
              <CheckboxAdapter2
                name="Notify"
                value={true}
                form={this.props.form}
                lable="Notify Student"
              />
            </BaseContainer>

            <div className="form-actions">
              <SubmitButton text="Submit" loading={this.state.loading} />
              <CancelButton text="Cancel" />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Credential;
