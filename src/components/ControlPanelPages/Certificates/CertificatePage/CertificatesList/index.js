import React from "react";
import { Button, Progress, Radio, Tooltip, Divider, Icon, Card } from "antd";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
/* 
import * as services from "../../../../../services/notifi-service";
import * as ax from "../../../../../services/axios-services";
import { CURRENCIES_GET, CURRENCIES } from "../../../../../globalURL";
import { setCurrencieEditMode } from "../../../../../services/redux-revices/actions/notifyUserActions"; */
import EditButton from "../../../../../pages/Adapters/EditButton";
import DeleteButton from "../../../../../pages/Adapters/DeleteButton";
import AddButton from "../../../../../pages/Adapters/AddButton";
import "./style.scss";

/* const mapStateToProps = (state, props) => ({
  setMode: state.notifi.setMode,
}) */

const { Meta } = Card;
//@connect(mapStateToProps)
class CertificatesList extends React.Component {
  state = {
    tableData: null,
    data: [
      {
        Id: "",
        Certificate: "1",
        Name: "Blockchain Essentials for Developers",
        StartEndDate: [moment("2018-01-01"), moment("2019-01-01")],
        Duration: "45",
        Level: "1",
        Description:
          "This badge earner understands how blockchain technology can be applied to improve banking, supply-chain, and other transaction-based business networks. They can explain IBM Blockchain and the Hyperledger Project's efforts to establish an open source distributed ledger technology to simplify the way that business transactions are conducted. The badge earner has experience using the IBM Blockchain service on Bluemix and experience in developing and deploying chaincode to a blockchain network.",
        CourseResult: ["A", "B"]
      }
    ],
    filterDropdownVisible: false,
    searchText: "",
    filtered: false,
    loading: false
  };
  _isMounted = false;
  /* editHendler = () => {
    const { dispatch } = this.props
    dispatch(setCurrencieEditMode(true))
  } */
  componentDidMount() {
    this._isMounted = true;
    /* ax.getMethod(CURRENCIES_GET)
      .then(currencies => {
        if (this._isMounted) {
          this.setState({
            tableData: currencies.data.result,
            data: currencies.data.result,
            loading: false,
          })
        }
      })
      .catch(error => {
        this.setState({
          loading: false,
        })
        services.openNotificationWithIcon('error', 'Something went wrong. Please refresh the page')
      }) */
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value });
  };

  onSearch = () => {
    const { searchText, tableData } = this.state;
    let reg = new RegExp(searchText, "gi");
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: tableData
        .map(record => {
          let match = record.Name.match(reg);
          if (!match) {
            return null;
          }
          return {
            ...record,
            name: (
              <span>
                {record.Name.split(reg).map((text, i) =>
                  i > 0
                    ? [<span className="highlight">{match[0]}</span>, text]
                    : text
                )}
              </span>
            )
          };
        })
        .filter(record => !!record)
    });
  };
  onChange = editorState => this.setState({ editorState });
  render() {
    let { data } = this.state;

    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title ">
            <Divider>
              <strong>Certificates</strong>
            </Divider>
          </div>
          <div className="utils__title">
            <AddButton
              url="/controlpanel/certificates/add-sertificate"
              size=""
            />
            <div className="float-right">
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">All</Radio.Button>
                <Radio.Button value="b">Some kind</Radio.Button>
                <Radio.Button value="c">Some kind</Radio.Button>
                <Radio.Button value="d">Some kind</Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
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
                    <Tooltip title="Edit">
                      <Link to="/controlpanel/certificates/edit/456">
                        <Icon type="edit" />
                      </Link>
                    </Tooltip>,
                    <Tooltip title="Delete">
                      <Link to="/controlpanel/certificates/456">
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
          <div className="col-3">
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
                    <Tooltip title="Edit">
                      <Link to="/controlpanel/certificates/edit/456">
                        <Icon type="edit" />
                      </Link>
                    </Tooltip>,
                    <Tooltip title="Delete">
                      <Link to="/controlpanel/certificates/456">
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
          <div className="col-3">
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
                    <Tooltip title="Edit">
                      <Link to="/controlpanel/certificates/edit/456">
                        <Icon type="edit" />
                      </Link>
                    </Tooltip>,
                    <Tooltip title="Delete">
                      <Link to="/controlpanel/certificates/456">
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
          <div className="col-3">
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
                    <Tooltip title="Edit">
                      <Link to="/controlpanel/certificates/edit/456">
                        <Icon type="edit" />
                      </Link>
                    </Tooltip>,
                    <Tooltip title="Delete">
                      <Link to="/controlpanel/certificates/456">
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
          <div className="col-3">
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
                    <Tooltip title="Edit">
                      <Link to="/controlpanel/certificates/edit/456">
                        <Icon type="edit" />
                      </Link>
                    </Tooltip>,
                    <Tooltip title="Delete">
                      <Link to="/controlpanel/certificates/456">
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
      </div>
    );
  }
}

export default CertificatesList;
