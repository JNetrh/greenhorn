import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import Header from './Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { checkLoggedUser } from '../../services/Auth/actions';
import NoAuthOverlay from '../molecules/NoAuthOverlay';

const { Sider, Content } = Layout;

class PageWrapper extends Component {
  componentDidMount() {
    this.props.checkLoggedUser();
  }
  render() {
    const { children, SideNav, user } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <React.Fragment>
          <Header />
          <Layout>
            {SideNav && (
              <Sider breakpoint="lg" collapsedWidth={0}>
                <SideMenu structure={SideNav} />
              </Sider>
            )}
            <Content>{children}</Content>
          </Layout>
        </React.Fragment>
        <NoAuthOverlay isActive={!user} />
      </Layout>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ checkLoggedUser }, dispatch),
)(PageWrapper);
