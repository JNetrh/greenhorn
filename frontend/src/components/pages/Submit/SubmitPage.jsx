import React, { Component } from 'react';
import { Icon, Button, Row, Col, Divider } from 'antd';

import styled from 'styled-components';
import moment from 'moment';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container } from '../../atoms/Container';
import { DocumentsList } from '../../organisms/DocumentsList';
import { TaskTimeline } from './TaskTimeline';
import { getLongDate } from '../../../helpers/dateFormat';

import breakpoints from '../../../styles/breakpoints';

const ButtonWrapper = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${breakpoints.md}) {
    position: absolute;
    top: 5px;
    left: -120px;
  }
`;

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
      // documents: [],
    };
  }

  // setDocument = doc => {
  //   const { documents } = this.state;
  //   this.setState({ documents: [doc, ...documents] });
  // };

  componentDidMount() {
    this.fetchDetail();
  }

  submitTask = formProps => {
    const { id } = this.props.match.params;
    const { onTaskSubmit } = this.props;
    console.log('formProps: ', formProps);
    // const { documents } = this.state;
    const fd = new FormData();
    if (formProps.documents) {
      Array.from(formProps.documents).forEach(doc =>
        fd.append('documents', doc),
      );
    }
    fd.append(
      'data',
      JSON.stringify({ ...formProps, status: 'submitted', assignedTask: id }),
    );

    onTaskSubmit(fd);
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
    // const { itemDetail, isLoading, documents } = this.state;
    const { itemDetail, isLoading } = this.state;
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
          </Col>
        </Row>
        {/* <Row gutter={45}>
          <Col xs={24} sm={12}>
            
          </Col>
        </Row> */}
        {/* <Row gutter={45}>
          <Col xs={24} sm={12}>
            <h3>Optional comment</h3>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default SubmitPage;
