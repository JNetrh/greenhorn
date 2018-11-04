import React, { Component } from 'react';

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
      return <div>Loading...</div>;
    }

    return (
      <Form initialValues={itemDetail} item={itemDetail} {...this.props} />
    );
  }
}

export default DetailPage;
