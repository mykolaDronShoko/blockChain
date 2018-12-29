import React from "react";
import { Form, Icon, Table, Button, Tag } from "antd";

const FormItem = Form.Item;

@Form.create()
class ManageApps extends React.Component {
  state = {};

  render() {
    const dataSource = [
      {
        key: "1",
        name: "Twitter",
        icon: "twitter",
        status: false
      },
      {
        key: "2",
        name: "Linkedin",
        icon: "linkedin",
        status: false
      },
      {
        key: "3",
        name: "facebook",
        icon: "facebook",
        status: false
      }
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, record, index) => (
          <div>
            <Icon
              type={record.icon}
              style={{ fontSize: "3.5rem", marginRight: "0.5rem" }}
            />
            {text}
          </div>
        )
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "Status",
        render: (text, record, index) => (
          <div>
            <Tag color={text ? "blue" : "red"}>
              {text ? "connected" : "not connected"}
            </Tag>
          </div>
        )
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Button type="primary">Connect</Button>
          </span>
        )
      }
    ];
    return (
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
  }
}

export default ManageApps;
