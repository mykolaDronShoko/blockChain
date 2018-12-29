import React from "react";
import { Card, Timeline, Icon, Table, Tag, Avatar, Divider } from "antd";
import "../style.scss";
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
const { Meta } = Card;

class Stsus extends React.Component {
  state = {};
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
    const title = (
      <div className="text-center">
        <Icon
          type="check-circle"
          theme="twoTone"
          style={{ fontSize: "25px", marginRight: "1rem" }}
          twoToneColor="#52c41a"
        />
        Verified
      </div>
    );
    return (
      <div className="row">
        <div className="col-12">
          <div className="card m-4">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={
                      <img
                        alt="example"
                        src="resources/images/example-certificate-verified.gif"
                      />
                    }
                  >
                    <Meta title={title} description="" />
                  </Card>
                </div>
                <div className="col-7">
                  <Timeline mode="alternate">
                    <Timeline.Item
                      dot={<Icon type="safety" style={{ fontSize: "26px" }} />}
                      color="green"
                    >
                      <strong style={{ fontSize: "18px" }}>
                        Format Validation
                      </strong>
                    </Timeline.Item>
                    <Timeline.Item>Get transaction ID</Timeline.Item>
                    <Timeline.Item>Comput local hash</Timeline.Item>
                    <Timeline.Item>Fetch remote hash</Timeline.Item>
                    <Timeline.Item>Parse issuer keys</Timeline.Item>
                    <Timeline.Item
                      dot={<Icon type="safety" style={{ fontSize: "26px" }} />}
                      color="green"
                    >
                      <strong style={{ fontSize: "18px" }}>
                        Hash comparison
                      </strong>
                    </Timeline.Item>
                    <Timeline.Item>Compare Hashes</Timeline.Item>
                    <Timeline.Item>Check Markle Root</Timeline.Item>
                    <Timeline.Item>Check Receipt</Timeline.Item>
                    <Timeline.Item
                      dot={<Icon type="safety" style={{ fontSize: "26px" }} />}
                      color="green"
                    >
                      <strong style={{ fontSize: "18px" }}>Status Check</strong>
                    </Timeline.Item>
                    <Timeline.Item>Revoked Status Check</Timeline.Item>
                    <Timeline.Item>Issuer Signature Check</Timeline.Item>
                    <Timeline.Item>Expired Status Check</Timeline.Item>
                    <Timeline.Item
                      dot={<Icon type="safety" style={{ fontSize: "26px" }} />}
                      color="green"
                    >
                      <strong style={{ fontSize: "18px" }}>Verified</strong>
                      <p>This is valid certificate</p>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stsus;
