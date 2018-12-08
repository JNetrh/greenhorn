import React, { Component } from 'react';
import { Icon, Button, Row, Col, Divider, Spin } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container } from '../../atoms/Container';
import { DocumentsList } from '../../organisms/DocumentsList';
import { TaskTimeline } from './TaskTimeline';
import { getLongDate } from '../../../helpers/dateFormat';
import { transformDocuments } from '../../../helpers/transformDocuments';
import { ButtonWrapper } from './ButtonWrapper';

const now = moment();

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSubmitting: false,
    };
  }

  componentDidMount() {
    this.fetchDetail();
  }

  submitTask = async data => {
    this.setState({
      isSubmitting: true,
    });
    const { id } = this.props.match.params;
    const { onTaskSubmit } = this.props;
    const itemDetail = await onTaskSubmit({ data, id });
    this.setState({
      isSubmitting: false,
      itemDetail,
    });
  };

  async fetchDetail() {
    const { id } = this.props.match.params;
    const { fetchAssignedTaskById } = this.props;
    const itemDetail = await fetchAssignedTaskById(id);
    this.setState({
      isLoading: false,
      itemDetail,
    });
  }
  render() {
    const { itemDetail, isLoading, isSubmitting } = this.state;
    const { Form } = this.props;
    if (isLoading) {
      return null;
    }
    const { Task, until, Documents, Workflows } = itemDetail;
    return (
      <Container style={{ marginTop: 20, position: 'relative' }}>
        <Helmet>
          <title>{Task.title}</title>
        </Helmet>
        <ButtonWrapper>
          <Link to="/">
            <Button icon="arrow-left">Back</Button>
          </Link>
        </ButtonWrapper>

        <h1>{Task.title}</h1>
        <h3>Until:</h3>
        <p>
          <Icon type="calendar-o" /> <b>due {moment(until).from(now)}</b> -{' '}
          {getLongDate(until)}
        </p>
        <h3>What to do:</h3>
        <p>{Task.description}</p>

        <Row gutter={45}>
          <Col xs={24} sm={12}>
            <h3>Task documents:</h3>
            <DocumentsList items={transformDocuments(Task.Documents)} />
            <Divider />
            <Form {...this.props} onSubmit={this.submitTask} />
          </Col>
          <Col xs={24} sm={12}>
            <h3>Workflow:</h3>
            <TaskTimeline workflow={Workflows} />
            <Spin spinning={isSubmitting} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubmitPage;
