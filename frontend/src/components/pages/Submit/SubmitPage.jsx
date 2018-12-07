import React, { Component } from 'react';
import { Icon, Button, Row, Col, Divider, Spin } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container } from '../../atoms/Container';
import { DocumentsList } from '../../organisms/DocumentsList';
import { TaskTimeline } from './TaskTimeline';
import { getLongDate } from '../../../helpers/dateFormat';
import { ButtonWrapper } from './ButtonWrapper';

const data = [
  {
    title: 'Emergency_Contact.doc',
    description: 'Please fill in and bring to desk C2045.',
    url: 'http://google.com/file.pdf',
  },
  {
    title: 'Employee_Handbook.pdf',
    description: 'Print out for handbook info',
    url: 'http://google.com/file2.pdf',
  },
  {
    title: 'Expectations.pdf',
    description: 'Copy of the offer letter and job description',
    url: 'http://google.com/file2.pdf',
  },
];

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
    return (
      <Container style={{ marginTop: 20, position: 'relative' }}>
        <Helmet>
          <title>{itemDetail.Task.title}</title>
        </Helmet>
        <ButtonWrapper>
          <Link to="/">
            <Button icon="arrow-left">Back</Button>
          </Link>
        </ButtonWrapper>

        <h1>{itemDetail.Task.title}</h1>
        <h3>Until:</h3>
        <p>
          <Icon type="calendar-o" />{' '}
          <b>due {moment(itemDetail.until).from(now)}</b> -{' '}
          {getLongDate(itemDetail.until)}
        </p>
        <h3>What to do:</h3>
        <p>{itemDetail.Task.description}</p>

        <Row gutter={45}>
          <Col xs={24} sm={12}>
            <h3>Task documents:</h3>
            <DocumentsList items={data} />
            <Divider />
            <Form {...this.props} onSubmit={this.submitTask} />
          </Col>
          <Col xs={24} sm={12}>
            <h3>Workflow:</h3>
            <TaskTimeline workflow={itemDetail.Workflows} />
            <Spin spinning={isSubmitting} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubmitPage;
