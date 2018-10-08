import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Divider, Icon, Input, Table} from "antd";
import {getFoldersStructure} from "../redux/actions/folders";

class DashboardComponent extends Component {
  columns = [
    {
      title: 'Name',
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
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          {DashboardComponent.renderActions(record)}
        </span>
      )
    }
  ];

  static renderActions(record) {
    const folderActions = [{name: 'Add folder'}, {name: 'Add file'}, {name: 'Edit'}, {name: 'Delete'}];
    const fileActions = [{name: 'Open'}, {name: 'Edit'}, {name: 'Delete'}];
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

    return (
      <div className="page dashboard">
        <div className="page-title">
          Dashboard
        </div>
        <div className="page-content">
          <div className="dashboard-management-panel">
            <div>
              <Button htmlType="button" className="dashboard-management-panel-button">Add file</Button>
              <Button htmlType="button" className="dashboard-management-panel-button">Add folder</Button>
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