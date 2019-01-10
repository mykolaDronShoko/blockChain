import React from "react";
import {
  Input,
  Button,
  Form,
  Divider
} from "antd"; /* 
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
import * as countries from "../../../../../pages/DefaultPages/ProfilePage/Profile/SettingsForm/countries.json";
import DatePickerAdapter2 from "../../../../../pages/Adapters/DatePickerAdapter2";
//import { connect } from "react-redux";

const FormItem = Form.Item;

const mapStateToProps = (state, props) => ({
  currencieEditMode: state.notifi.currencieEditMode
});

@Form.create()
class UsersEdit extends React.Component {
  state = {
    user: {
      Certificate: "",
      Name: "",
      StartEndDate: [moment("2018-01-01"), moment("2019-01-01")],
      Duration: "",
      Level: "",
      Description: "",
      CourseResult: ["A", "B"]
    },
    userEditMode: false,
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
  render() {
    const options = [{ value: 1, title: "1" }];
    const roles = [
      { value: 1, title: "Admin" },
      { value: 2, title: "Institution" },
      { value: 3, title: "Learners" }
    ];
    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title ">
            <Divider>
              <strong>
                {this.state.userEditMode ? "User Edit" : "Add User"}
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
            <BaseContainer>
              <InputAdapter2
                name="FirstName"
                value=""
                required
                placeholder="First Name"
                form={this.props.form}
                lable="First Name"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="LastName"
                value=""
                required
                placeholder="Last Name"
                form={this.props.form}
                lable="Last Name"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="Email"
                value=""
                required
                placeholder="Email"
                form={this.props.form}
                lable="Email"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="Password"
                value=""
                required
                placeholder="Password"
                form={this.props.form}
                lable="Password"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="ConfirmPassword"
                value=""
                required
                placeholder="Confirm Password"
                form={this.props.form}
                lable="Confirm Password"
              />
            </BaseContainer>
            <BaseContainer>
              <SelectAdapter2
                name="Country"
                required
                value="United States"
                placeholder="Country"
                form={this.props.form}
                lable="Country"
                options={countries.map(c => ({ value: c.name, title: c.name }))}
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="City"
                value=""
                required
                placeholder="City"
                form={this.props.form}
                lable="City"
              />
            </BaseContainer>
            <BaseContainer>
              <DatePickerAdapter2
                name="DateBirth"
                required
                value=""
                placeholder="Date of Birth"
                form={this.props.form}
                lable="Select Birthday"
              />
            </BaseContainer>
            <BaseContainer>
              <SelectAdapter2
                name="Institution"
                value=""
                placeholder="Select Institution"
                form={this.props.form}
                lable="Institution Name"
                options={options}
              />
            </BaseContainer>

            <BaseContainer>
              <SelectAdapter2
                name="Course"
                value=""
                placeholder="Course"
                form={this.props.form}
                lable="Course"
                options={options}
              />
            </BaseContainer>

            <BaseContainer>
              <SelectAdapter2
                name="Role"
                required
                value=""
                placeholder="Сhoose a Role"
                form={this.props.form}
                lable="Role"
                options={roles}
              />
            </BaseContainer>

            <div className="form-actions">
              <SubmitButton
                text={this.state.userEditMode ? "Save" : "Add"}
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

export default UsersEdit;
