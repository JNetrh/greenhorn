import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import view from './view';

export const MENU_ITEMS = [
  { title: 'Dashboard', to: '/' },
  { title: 'Tasks review', to: '/taskreview', roles: ['hr', 'taskowner'] },
  { title: 'Employees', to: '/user/list', roles: ['hr'] },
  { title: 'Tasks', to: '/task/list', roles: ['hr', 'taskowner'] },
];

export default compose(
  connect(({ auth: { user: { role } } }) => ({
    userRole: role,
    menuItems: MENU_ITEMS,
  })),
  withRouter,
)(view);
