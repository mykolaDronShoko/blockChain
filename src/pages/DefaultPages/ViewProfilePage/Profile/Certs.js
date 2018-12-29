import React from "react";
import { Card, Icon, Tooltip } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

class Certs extends React.Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src="resources/images/example-certificate-verified.gif"
                  />
                }
                actions={[
                  <Tooltip title="Detail">
                    <Link to={this.props.match.url + "/detail/454"}>
                      <Icon type="edit" />
                    </Link>
                  </Tooltip>,
                  <Tooltip title="Delete">
                    <Link to="/home/viewprofile/delete/456">
                      <Icon type="delete" />
                    </Link>
                  </Tooltip>
                ]}
              >
                <Meta
                  title="Blockchain Essentials for Developers"
                  description="ISSUED ON 07 MAY 2017"
                />
              </Card>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src="resources/images/example-certificate-verified.gif"
                  />
                }
                actions={[
                  <Tooltip title="Detail">
                    <Link to={this.props.match.url + "/detail/454"}>
                      <Icon type="edit" />
                    </Link>
                  </Tooltip>,
                  <Tooltip title="Delete">
                    <Link to="/viewprofile/delete/455">
                      <Icon type="delete" />
                    </Link>
                  </Tooltip>
                ]}
              >
                <Meta
                  title="Blockchain Essentials for Developers"
                  description="ISSUED ON 07 MAY 2017"
                />
              </Card>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src="resources/images/example-certificate-verified.gif"
                  />
                }
                actions={[
                  <Tooltip title="Detail">
                    <Link to={this.props.match.url + "/detail/454"}>
                      <Icon type="edit" />
                    </Link>
                  </Tooltip>,
                  <Tooltip title="Delete">
                    <Link to="/viewprofile/delete/454">
                      <Icon type="delete" />
                    </Link>
                  </Tooltip>
                ]}
              >
                <Meta
                  title="Blockchain Essentials for Developers"
                  description="ISSUED ON 07 MAY 2017"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Certs;
