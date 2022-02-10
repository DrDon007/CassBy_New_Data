import React from "react";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import { Layout, Breadcrumb, Avatar  } from "antd";
import DashContent from "./DashContent";
import { UserOutlined } from '@ant-design/icons';

import './Dashboard.css';

const { Header, Footer } = Layout;

export default function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
        <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Avatar size={44} icon={<UserOutlined />} />
        </Header>
        <DashContent />
        <Footer style={{ textAlign: "center" }}>CassBy</Footer>
      </Layout>
    </Layout>
  );
}
