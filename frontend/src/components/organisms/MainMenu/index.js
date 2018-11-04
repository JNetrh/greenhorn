import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import view from './view';

export const MENU_ITEMS = [
  { title: 'To be done', to: '/' },
  { title: 'Tasks', to: '/task/list', roles: ['hr', 'taskowner'] },
  { title: 'Employees', to: '/user/list', roles: ['hr'] },
];

export default compose(
  connect(({ auth: { user: { role } } }) => ({
    userRole: role,
    menuItems: MENU_ITEMS,
  })),
  withRouter,
)(view);
