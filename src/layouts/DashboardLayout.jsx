import { Outlet, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/auth/authSlice";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FiLogOut } from "react-icons/fi";
import { GiBackstab } from "react-icons/gi";
import { FaCodeBranch } from "react-icons/fa6";
import { PiAddressBook, PiBookOpenTextDuotone } from "react-icons/pi";
import { Button, Layout, Menu, theme, Image } from "antd";
import logo from "../assets/images/logo.jpeg";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  //User State
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Instantiating dispatch hook
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  // Time Based greeting
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 16) greet = "afternoon";
  else if (hours >= 16 && hours <= 24) greet = "evening";

  // Collapsable
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical mt-[100px]" />
        <Link to={"/"}>
          <Image
            width={30}
            src={logo}
            height={30}
            className="ml-[30px] mt-[-40px]"
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
              icon: <PiBookOpenTextDuotone />,
              label: <Link to={"contributions"}>Contributions</Link>,
            },
            {
              key: "6",
              icon: <PiBookOpenTextDuotone />,
              label: <Link to={"black-list"}>Black List</Link>,
            },
            {
              key: "7",
              icon: <FiLogOut onClick={onLogout} />,
              label: "LogOut",
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
          <h1 className="text-primary font-extrabold mb-5 text-center mt-[30px]">
            Good {greet} {user && user.firstName}!
          </h1>

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
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          // className="h-"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
