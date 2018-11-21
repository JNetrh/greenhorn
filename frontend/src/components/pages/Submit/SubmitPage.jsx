import React, { Component } from 'react';
import { Upload, Icon, message, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormWrapper } from '../../atoms/FormWrapper';
import { Container } from '../../atoms/Container';
import breakpoints from '../../../styles/breakpoints';
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
  @media (min-width: ${breakpoints.md}) {
    position: absolute;
    top: 5px;
    left: -120px;
  }
`;
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
        <h3>What to do:</h3>
        <p>
          In order to get your new notebook, you need to go through few steps.
          First please contact Petr Klíč (petr@klic.com) so he can give you an
          access and LDAP. Then please print out the papers and bring them to
          the desk 2245D. After everything, please visit your manager, he will
          tell you the next steps.
        </p>
        <h3>Until:</h3>
        <p>25th September 2018</p>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </Container>
    );
  }
}

export default SubmitPage;
