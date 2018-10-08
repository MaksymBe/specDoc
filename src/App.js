import React, {Component} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Route, Switch} from "react-router-dom";
import {Layout} from "antd";
import {NavigationBar, Dashboard} from "./components";

class App extends Component {

  render() {
    return (
      <main>
        <Layout>
          <NavigationBar/>
          <Layout.Content>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
            </Switch>
          </Layout.Content>
        </Layout>
      </main>
    );
  }
}

export default App;
