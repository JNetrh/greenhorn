import AddUserPage from '../components/pages/AddUser';
import ListUsers from '../components/pages/ListUsers';
import mapRouteObject from '../helpers/mapRouteObject';
import AddGroupForm from '../components/pages/AddGroup';

const EmployeesRoutes = {
  users: {
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
  groups: {
    icon: 'team',
    title: 'Groups',
    sub: {
      add: {
        title: 'Add Group',
        icon: 'usergroup-add',
        Component: AddGroupForm,
      },
      list: {
        title: 'List',
        icon: 'ordered-list',
        Component: () => 'will be done', //TODO
      },
    },
  },
};

const UserRoutes = mapRouteObject(EmployeesRoutes);

export default UserRoutes;
