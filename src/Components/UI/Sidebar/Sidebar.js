
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';




const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      
        <Sider  collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >CassBy logo</div>
          <Menu  defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             DashBoard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Clients
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Industries">
              <Menu.Item key="3">Templates</Menu.Item>
              <Menu.Item key="4">Taxes</Menu.Item>
              <Menu.Item key="5">Pricing</Menu.Item>
            </SubMenu>
            {/* <h3>ACCOUNT PAGES</h3> */}
            <Menu.Item key="6" icon={<DesktopOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="7" icon={<DesktopOutlined />}>
            Users
            </Menu.Item>
            <Menu.Item key="8" icon={<DesktopOutlined />}>
            Settings
            </Menu.Item>
          </Menu>
          <div className='sidebar-box-help'>
            <img src=""/>
            <h3>Need help</h3>
            <p>Please check our docs</p>
            <button>DOCUMENTATION</button>
          </div>
        </Sider> 
    ); 
  }
}
