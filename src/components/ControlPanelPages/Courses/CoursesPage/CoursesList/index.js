import React from "react";
import { Table, Icon, Input, Button, Spin, Divider } from "antd";
import { connect } from "react-redux";
import moment from "moment";

import "./style.scss"; /* 
import * as services from '../../../../../services/notifi-service'
import * as ax from '../../../../../services/axios-services'
import { CURRENCIES_GET, CURRENCIES } from '../../../../../globalURL'
import { setCurrencieEditMode } from '../../../../../services/redux-revices/actions/notifyUserActions' */
import EditButton from "../../../../../pages/Adapters/EditButton";
import DeleteButton from "../../../../../pages/Adapters/DeleteButton";
import AddButton from "../../../../../pages/Adapters/AddButton";

/* const mapStateToProps = (state, props) => ({
  setMode: state.notifi.setMode,
}) */

//@connect(mapStateToProps)
class CoursesList extends React.Component {
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

  render() {
    let { data } = this.state;

    const columns = [
      {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        render: text => <span>{text}</span>,
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>
              Search
            </Button>
          </div>
        ),
        filterIcon: (
          <Icon
            type="search"
            style={{ color: this.state.filtered ? "#108ee9" : "#aaa" }}
          />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible
            },
            () => this.searchInput && this.searchInput.focus()
          );
        }
      },
      {
        title: "Certificate",
        dataIndex: "Certificate",
        key: "Certificate",
        render: text => <span>{text}</span>
      },
      {
        title: "Duration",
        dataIndex: "Duration",
        key: "Duration",
        render: text => <span>{text} Hours</span>
      },
      {
        title: "Start-End Date",
        dataIndex: "StartEndDate",
        key: "StartEndDate",

        render: (text, record) => (
          <span>
            {record.StartEndDate[0].format("YYYY/MM/DD")}-
            {record.StartEndDate[1].format("YYYY/MM/DD")}
          </span>
        )
      },
      {
        title: "Level",
        dataIndex: "Level",
        key: "Level",
        render: text => <span>{text}</span>
      },
      {
        title: "Action",
        key: "action",
        dataIndex: "Id",
        render: (text, record) => (
          <span>
            <EditButton
              className="mr-1"
              url={"/controlpanel/edit-course/" + text}
              onClick={this.editHendler}
            />
            <DeleteButton confirm={() => {}} />
          </span>
        )
      }
    ];
    return (
      <div className="card">
        <div className="card-header">
          <div className="utils__title ">
            <Divider>
              <strong>Courses</strong>
            </Divider>
          </div>
          <div className="utils__title">
            <AddButton url="/controlpanel/add-course" />
          </div>
        </div>
        <div className="card-body">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 100 }}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default CoursesList;
