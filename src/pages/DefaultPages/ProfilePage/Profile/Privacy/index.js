import React from "react";
import { Form, Switch, Tabs, Button, Upload } from "antd";
import BadgesList from "./BadgesList";
const TabPane = Tabs.TabPane;

class Privacy extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Switch
          checkedChildren="Private"
          unCheckedChildren="Public"
          defaultChecked
          style={{ marginBottom: "2rem" }}
        />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Public" key="1">
            <BadgesList />
          </TabPane>
          <TabPane tab="Private" key="2">
            <BadgesList />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Privacy;
