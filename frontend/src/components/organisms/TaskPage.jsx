import React, { Component } from 'react';
import { Spin } from 'antd';

class TaskPage extends Component {
  state = {
    isLoading: true,
    itemDetail: null,
  };

  componentDidMount() {
    this.fetchGroups();
  }

  async fetchGroups() {
    const { FetchGroups } = this.props;
    const grouplist = await FetchGroups();
    this.setState({
      isLoading: false,
      grouplist,
    });
  }

  render() {
    const { grouplist, isLoading } = this.state;
    const { Form } = this.props;

    if (isLoading) {
      return <Spin spinning style={{ padding: 40 }} />;
    }

    return <Form initialValues={grouplist} item={grouplist} {...this.props} />;
  }
}

export default TaskPage;
