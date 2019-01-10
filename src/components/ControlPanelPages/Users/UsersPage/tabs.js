import React from "react";
import { Tabs } from "antd";
import UsersList from "./UsersList/index";
const TabPane = Tabs.TabPane;
class TabPage extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span>Admins</span>} key="1">
              <UsersList UserRole={1} />
            </TabPane>
            <TabPane tab={<span>Institution</span>} key="2">
              <UsersList UserRole={3} />
            </TabPane>
            <TabPane tab={<span>Learners</span>} key="3">
              <UsersList UserRole={2} />
            </TabPane>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default TabPage;
