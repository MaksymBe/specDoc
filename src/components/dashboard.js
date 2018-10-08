import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Divider, Icon, Input, Table} from "antd";
import {getFoldersStructure} from "../redux/actions/folders";
import {locale} from "../index";

class DashboardComponent extends Component {
  columns = [
    {
      title: locale.COMMON.NAME,
      dataIndex: 'name',
      key: 'name',
      render: (text, item) => {
        return (
          <span>
          <Icon type={item.type} style={{marginRight: 0.5 + 'rem'}}/>
            {text}
        </span>
        )
      }
    },
    {
      title: locale.COMMON.ACTIONS,
      key: 'actions',
      render: (text, record) => (
        <span>
          {DashboardComponent.renderActions(record)}
        </span>
      )
    }
  ];

  static renderActions(record) {
    const {COMMON} = locale;
    const folderActions = [{name: COMMON.ADD_FILE}, {name: COMMON.ADD_FOLDER}, {name: COMMON.EDIT}, {name: COMMON.DELETE}];
    const fileActions = [{name: COMMON.OPEN}, {name: COMMON.EDIT}, {name: COMMON.DELETE}];
    const drawAction = (action, index) => (
      <span key={index.toString()}>
        <a>{action.name}</a>
        <Divider type='vertical'/>
      </span>
    );

    switch (record.type) {
      case 'folder':
        return folderActions.map(drawAction);

      case 'file':
        return fileActions.map(drawAction);

      default:
        return (<span> </span>)
    }
  }

  componentDidMount() {
    this.props.getFolders();
  }

  render() {
    const {foldersStructure} = this.props;
    const {DASHBOARD, COMMON} = locale;

    return (
      <div className="page dashboard">
        <div className="page-title">
          {DASHBOARD.PAGE_TITLE}
        </div>
        <div className="page-content">
          <div className="dashboard-management-panel">
            <div>
              <Button htmlType="button" className="dashboard-management-panel-button">{COMMON.ADD_FOLDER}</Button>
              <Button htmlType="button" className="dashboard-management-panel-button">{COMMON.ADD_FILE}</Button>
            </div>
            <Input.Search className="dashboard-management-panel-search"/>
          </div>
          <Table
            columns={this.columns}
            dataSource={foldersStructure}
            pagination={false}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({foldersStructure}) => ({
  foldersStructure
});

const mapDispatchToProps = (dispatch) => ({
  getFolders: () => dispatch(getFoldersStructure())
});

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);