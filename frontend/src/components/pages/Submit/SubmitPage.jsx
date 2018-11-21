import React, { Component } from 'react';
import {
  Upload,
  Icon,
  message,
  Button,
  Row,
  Col,
  Timeline,
  Input,
  Form,
  Divider,
} from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../atoms/Container';
import breakpoints from '../../../styles/breakpoints';
import { DocumentsList } from '../../organisms/DocumentsList';
import TextArea from 'antd/lib/input/TextArea';
const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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

class SubmitPage extends Component {
  render() {
    // const { task } = this.props;
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
          <Icon type="calendar-o" /> 25th September 2018
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
            <Timeline style={{ marginTop: 25 }}>
              <Timeline.Item>Task XY assigned to you</Timeline.Item>
              <Timeline.Item color="green">
                25th of May - Submited 2 documents
              </Timeline.Item>
              <Timeline.Item color="red">
                Task returned by Petr Klíč
              </Timeline.Item>
              <Timeline.Item>Task approved</Timeline.Item>
            </Timeline>
          </Col>
        </Row>
        <Divider />
        <h3>Submit your documents:</h3>
        <Row gutter={45}>
          <Col xs={24} sm={12}>
            <DocumentsList items={[]} />
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Upload your documents here</p>
              <p className="ant-upload-hint">
                Click or drag file to this area to upload
              </p>
            </Dragger>
            <Form.Item label={'Comment:'}>
              <TextArea />
            </Form.Item>
            <Button type="primary">Submit</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubmitPage;
