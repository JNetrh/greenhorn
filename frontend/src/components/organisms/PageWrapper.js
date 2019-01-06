import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import SideMenu from './SideMenu';
import Header from './Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { checkLoggedUser } from '../../services/Auth/actions';
import styled from 'styled-components';
import NoAuthOverlay from '../molecules/NoAuthOverlay';

const { Sider, Content } = Layout;

const SidenavTriggerButton = styled(Icon)`
  transition: left 0.4s, color 0.3s;
  margin-top: 10px;
  position: absolute;
  z-index: 1001;
  display: block;
  background-color: #31bd79;
  opacity: 1;
  border-radius: 0 10px 10px 0;
  font-size: 18px;
  line-height: 64px;
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    color: #eee;
  }
  left: ${({ collapsed }) => (collapsed ? '0' : '200px')};
`;
class PageWrapper extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this.props.checkLoggedUser();
  }
  render() {
    const { children, SideNav, user } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {user && (
          <React.Fragment>
            <Header />
            <Layout>
              {SideNav && (
                <div>
                  <SidenavTriggerButton
                    collapsed={this.state.collapsed}
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <Sider
                    breakpoint="lg"
                    collapsedWidth={0}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                  >
                    <SideMenu structure={SideNav} />
                  </Sider>
                </div>
              )}
              <Content>{children}</Content>
            </Layout>
          </React.Fragment>
        )}
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
