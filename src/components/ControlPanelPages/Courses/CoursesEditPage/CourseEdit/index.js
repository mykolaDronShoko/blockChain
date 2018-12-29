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
//import { connect } from "react-redux";

const FormItem = Form.Item;

const mapStateToProps = (state, props) => ({
  currencieEditMode: state.notifi.currencieEditMode
});

@Form.create()
class CourseEdit extends React.Component {
  state = {
    course: {
      Certificate: "",
      Name: "",
      StartEndDate: [moment("2018-01-01"), moment("2019-01-01")],
      Duration: "",
      Level: "",
      Description: "",
      CourseResult: ["A", "B"]
    },
    courseEditMode: false,
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
    const { getFieldDecorator } = this.props.form;
    const {
      Certificate,
      Name,
      StartEndDate,
      Level,
      Duration,
      Description,
      CourseResult
    } = this.state.course;
    const options = [{ value: 1, title: "1" }];
    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title ">
            <Divider>
              <strong>
                {this.state.courseEditMode ? "Course Edit" : "Add Course"}
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
                name="Name"
                value={Name}
                placeholder="Name"
                form={this.props.form}
                lable="Name"
              />
            </BaseContainer>
            <BaseContainer>
              <SelectAdapter2
                name="Certificate"
                value={Certificate}
                placeholder="Certificate"
                form={this.props.form}
                lable="Certificate"
                options={options}
              />
            </BaseContainer>
            <BaseContainer>
              <RangePickerAdapter2
                name="StartEndDate"
                value={StartEndDate}
                onChange={this.onChange}
                form={this.props.form}
                lable="Start - End Date"
              />
            </BaseContainer>
            <BaseContainer>
              <InputAdapter2
                name="Duration"
                value={Duration}
                placeholder="Duration"
                form={this.props.form}
                lable="Duration"
              />
            </BaseContainer>
            <BaseContainer>
              <SelectAdapter2
                name="Level"
                value={Level}
                placeholder="Level"
                form={this.props.form}
                lable="Level"
                options={options}
              />
            </BaseContainer>
            <BaseContainer>
              <SelectAdapter2
                name="InstitutionName"
                value=""
                placeholder="Institution Name"
                form={this.props.form}
                lable="Institution Name"
                options={options}
              />
            </BaseContainer>
            <BaseContainer>
              <SelectAdapter2
                name="CourseAuthor"
                value=""
                placeholder="Course Author"
                form={this.props.form}
                lable="Course Author"
                options={options}
              />
            </BaseContainer>
            <BaseContainer>
              <TextAreaAdapter2
                name="Description"
                value={Description}
                placeholder="Description"
                form={this.props.form}
                lable="Description"
              />
            </BaseContainer>
            <BaseContainer>
              <DynamicInputAdapter
                name="keys"
                value={CourseResult}
                placeholder="Description"
                form={this.props.form}
                lable="Course Result"
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

export default CourseEdit;
