import React from "react";
import { Tabs } from "antd";
import General from "./General";
import ManageAccountPermissions from "./ManageAccountPermissions";
import ManageApps from "./ManageApps";
import ManageAutoAccept from "./ManageAutoAccept";
import LoginPageKey from "../../../../LoginPageKey/index";
import LoginForm from "../../../../LoginPageKey/Login/LoginForm/index";

const TabPane = Tabs.TabPane;

class TabsAccount extends React.Component {
  state = {};

  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="General" key="1">
          <General />
        </TabPane>
        <TabPane tab="Merge Account" key="2">
          <div className="row">
            <div className="col-6">
              <LoginForm />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Manage Account Permissions" key="3">
          <ManageAccountPermissions />
        </TabPane>
        <TabPane tab="Manage Apps" key="4">
          <ManageApps />
        </TabPane>
        <TabPane tab="Manage Auto Accept" key="5">
          <ManageAutoAccept />
        </TabPane>
      </Tabs>
    );
  }
}

export default TabsAccount;
