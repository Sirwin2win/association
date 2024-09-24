import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FiLogOut } from "react-icons/fi";
import { GiBackstab } from "react-icons/gi";
import { PiAddressBook, PiBookOpenTextDuotone } from "react-icons/pi";
import { Button, Layout, Menu, theme, Image } from "antd";
import logo from "../assets/images/logo.jpeg";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical mt-[100px]" />
        <Link to={"/"}>
          <Image
            width={50}
            src={logo}
            height={50}
            className="ml-[60px] mt-[-40px]"
          />
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to={"profile"}>Profile</Link>,
            },
            {
              key: "2",
              icon: <PiAddressBook />,
              label: <Link to={"attendance"}>Attendance</Link>,
            },
            {
              key: "3",
              icon: <GiBackstab />,
              label: <Link to={"complaint"}>Complaints</Link>,
            },
            {
              key: "4",
              icon: <PiBookOpenTextDuotone />,
              label: <Link to={"minutes"}>Minutes</Link>,
            },
            {
              key: "5",
              icon: <FiLogOut />,
              label: <Link to={"logout"}>LogOut</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
