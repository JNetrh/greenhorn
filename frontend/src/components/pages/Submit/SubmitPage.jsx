import React, { Component } from 'react';
import { Icon, Button, Row, Col, Divider } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../atoms/Container';
import breakpoints from '../../../styles/breakpoints';
import { DocumentsList } from '../../organisms/DocumentsList';
import moment from 'moment';
import { UploadDocumentsForm } from './UploadDocumentsForm';
import { TaskTimeline } from './TaskTimeline';

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
  render() {
    const until = moment('2018-12-01');
    return (
      <Container style={{ marginTop: 20, position: 'relative' }}>
        <ButtonWrapper>
          <Link to="/">
            <Button icon="arrow-left">Back</Button>
          </Link>
        </ButtonWrapper>
        <h1>Great and long name</h1>
        <h3>Until:</h3>
        <p>
          <Icon type="calendar-o" /> <b>due {until.from(now)}</b> - 25th
          September 2018
        </p>
        <h3>What to do:</h3>
        <p>
          In order to get your new notebook, you need to go through few steps.
          First please contact Petr Klíč (petr@klic.com) so he can give you an
          access and LDAP. Then please print out the papers and bring them to
          the desk 2245D. After everything, please visit your manager, he will
          tell you the next steps.
        </p>
        <Row gutter={45}>
          <Col xs={24} sm={12}>
            <h3>Task documents:</h3>
            <DocumentsList items={data} />
          </Col>
          <Col xs={24} sm={12}>
            <h3>Workflow:</h3>
            <TaskTimeline />
          </Col>
        </Row>
        <Divider />
        <h3>Submit your documents:</h3>
        <Row gutter={45}>
          <Col xs={24} sm={12}>
            <UploadDocumentsForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubmitPage;
