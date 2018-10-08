import React, {Component} from 'react';
import {connect} from "react-redux";

class DashboardComponent extends Component {

  render() {
    return (<div>
      Dashboard works
    </div>)
  }
}

export const Dashboard = connect()(DashboardComponent);