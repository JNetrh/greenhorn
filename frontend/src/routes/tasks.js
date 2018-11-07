import ListTasks from '../components/pages/ListTasks';
import AddTask from '../components/pages/AddTask';
import mapRouteObject from '../helpers/mapRouteObject';

export const TasksRoutesSideNav = {
  task: {
    icon: 'check-square',
    title: 'Tasks',
    sub: {
      add: {
        title: 'Add Task',
        icon: 'plus',
        Component: AddTask,
      },
      list: {
        title: 'List',
        icon: 'ordered-list',
        Component: ListTasks,
      },
    },
  },
};

const TaskRoutes = mapRouteObject(TasksRoutesSideNav);

export default TaskRoutes;
