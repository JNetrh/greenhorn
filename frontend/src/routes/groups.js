import mapRouteObject from '../helpers/mapRouteObject';
import AddGroupForm from '../components/pages/AddGroup';
import ListGroups from '../components/pages/ListGroups';

export const GroupsRoutesSideNav = {
  group: {
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
        Component: ListGroups,
      },
    },
  },
};

const GroupsRoutes = mapRouteObject(GroupsRoutesSideNav);

export default GroupsRoutes;
