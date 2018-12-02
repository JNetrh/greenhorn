import AddUserPage from '../components/pages/AddUser';
import ListUsers from '../components/pages/ListUsers';
import mapRouteObject from '../helpers/mapRouteObject';

export const UserRoutesSideNav = {
  user: {
    icon: 'user',
    title: 'Users',
    sub: {
      add: {
        title: 'Add User',
        icon: 'user-add',
        Component: AddUserPage,
      },
      list: {
        title: 'List',
        icon: 'ordered-list',
        Component: ListUsers,
      },
    },
  },
};

const UserRoutes = mapRouteObject(UserRoutesSideNav);

export default UserRoutes;
