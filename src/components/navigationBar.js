import React from "react";
import {Menu, Layout} from "antd";

export const NavigationBar = () => {
  const {Header} = Layout;
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Invite</Menu.Item>
        <Menu.Item key="2">Search</Menu.Item>
        <Menu.Item key="3">Add</Menu.Item>
        <Menu.Item key="4">My</Menu.Item>
      </Menu>
    </Header>

  )
};