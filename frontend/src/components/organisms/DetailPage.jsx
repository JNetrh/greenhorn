import React, { Component } from 'react';
import { Spin } from 'antd';

class DetailPage extends Component {
  state = {
    isLoading: true,
    itemDetail: null,
  };

  componentDidMount() {
    this.fetchDetail();
  }

  async fetchDetail() {
    const { id } = this.props.match.params;
    const { fetchDetailById } = this.props;
    const itemDetail = await fetchDetailById(id);
    this.setState({
      isLoading: false,
      itemDetail,
    });
  }

  render() {
    const { itemDetail, isLoading } = this.state;
    const { Form } = this.props;

    if (isLoading) {
      return <Spin spinning style={{ padding: 40 }} />;
    }

    return (
      <Form initialValues={itemDetail} item={itemDetail} {...this.props} />
    );
  }
}

export default DetailPage;
