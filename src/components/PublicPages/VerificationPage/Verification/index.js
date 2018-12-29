import React from "react";
import { Input, Button, Form, Divider, Spin, Icon, Rate } from "antd";
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
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
                  <Search
                    placeholder="Credential URL"
                    enterButton="Verify"
                    size="large"
                    onSearch={value => console.log(value)}
                  />
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
