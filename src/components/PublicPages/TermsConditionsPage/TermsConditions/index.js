import React from "react";
import { Table, Icon, Input, Button, Spin, Divider } from "antd";
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
class TermsConditions extends React.Component {
  state = {
    magic: {
      Description: "Terms and Conditions",
      SeoTitle: "",
      Title: "Terms and Conditions",
      Content: "Terms and Conditions Content",
      SeoDescription: ""
    }
  };
  _isMounted = false;
  componentDidMount() {
    /* this._isMounted = true
    this.getMagic(10) */
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
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
                  {Content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TermsConditions;
