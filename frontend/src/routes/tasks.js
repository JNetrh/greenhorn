import ListTasks from '../components/pages/ListTasks';
import mapRouteObject from '../helpers/mapRouteObject';

const TasksRoutesObject = {
  tasks: {
    icon: 'check-square',
    title: 'Tasks',
    sub: {
      add: {
        title: 'Add Task',
        icon: 'plus',
        Component: () => 'will be done',
      },
      list: {
        title: 'List',
        icon: 'ordered-list',
        Component: ListTasks,
      },
    },
  },
};

const TaskRoutes = mapRouteObject(TasksRoutesObject);

export default TaskRoutes;
