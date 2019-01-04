import React, { Component } from 'react';
import { Icon, Button, Row, Col, Divider, Spin } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container } from '../../atoms/Container';
import { DocumentsList } from '../../organisms/DocumentsList';
import { getLongDate } from '../../../helpers/dateFormat';
import { transformDocuments } from '../../../helpers/transformDocuments';
import { RenderSubmitForm } from './RenderSubmitForm';
import { ButtonPositionWrapper } from '../../atoms/ButtonWrapper';
import { TaskTimeline } from '../../organisms/TaskTimeline';

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

    if (itemDetail.error) {
      this.setState({
        isSubmitting: false,
      });
      return;
    }

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
    if (isLoading) {
      return null;
    }
    const { Task, until, Workflows } = itemDetail;
    return (
      <Container style={{ marginTop: 20, position: 'relative' }}>
        <Helmet>
          <title>{Task.title}</title>
        </Helmet>
        <ButtonPositionWrapper>
          <Link to="/">
            <Button icon="arrow-left">Back</Button>
          </Link>
        </ButtonPositionWrapper>
        <h1>{Task.title}</h1>
        <Row gutter={45}>
          <Col sm={12}>
            <h3>Until:</h3>
            <p>
              <Icon type="calendar-o" /> <b>due {moment(until).from(now)}</b> -{' '}
              {getLongDate(until)}
            </p>
            <h3>What to do:</h3>
            <p>{Task.description}</p>
          </Col>
          <Col sm={12}>
            <h3>Task documents:</h3>
            <DocumentsList items={transformDocuments(Task.Documents)} />
          </Col>
        </Row>
        <Divider />
        <Row gutter={45}>
          <Col xs={24} sm={12}>
            <h3>Workflow:</h3>
            <TaskTimeline workflow={Workflows} />
            <Spin spinning={isSubmitting} />
          </Col>
          <Col xs={24} sm={12}>
            <h3>Your submission:</h3>
            <RenderSubmitForm
              props={this.props}
              onSubmit={this.submitTask}
              workflows={Workflows}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubmitPage;
