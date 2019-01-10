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
class UsersList extends React.Component {
  state = {
    tableData: null,
    data: [
      {
        Id: "456",
        Name: "Artour",
        SurName: "Scott",
        Email: "artour@gmail.com",
        Institution: "IBM",
        Course: "Blockchain Essentials"
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
        title: "SurName",
        dataIndex: "SurName",
        key: "SurName",
        render: text => <span>{text}</span>
      },
      {
        title: "Email",
        dataIndex: "Email",
        key: "Email",
        render: text => <span>{text}</span>
      },
      {
        title: "Institution",
        dataIndex: "Institution",
        key: "Institution",
        render: text => <span>{text}</span>
      },

      {
        title: "Course",
        dataIndex: "Course",
        key: "Course",
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
              url={"/controlpanel/users/edit-user/" + text}
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
              <strong>Users</strong>
            </Divider>
          </div>
          <div className="utils__title">
            <AddButton url="/controlpanel/users/add-user" />
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

export default UsersList;
