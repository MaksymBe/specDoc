import React from "react";
import {Menu, Layout} from "antd";
import {locale} from "../index";

export const NavigationBar = () => {
  const {Header} = Layout;
  const {NAVIGATION} = locale;
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">{NAVIGATION.INVITE}</Menu.Item>
        <Menu.Item key="2">{NAVIGATION.SEARCH}</Menu.Item>
        <Menu.Item key="3">{NAVIGATION.ADD}</Menu.Item>
        <Menu.Item key="4">{NAVIGATION.MY}</Menu.Item>
      </Menu>
    </Header>

  )
};