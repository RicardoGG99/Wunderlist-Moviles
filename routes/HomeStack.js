import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import CreateTask from '../pages/CreateTask';
import UpdateUser from '../pages/UpdateUser';

const screens = {
  Dashboard: {
    screen: Dashboard,
  },

  CreateTask: {
    screen: CreateTask,
  },

  UpdateUser: {
    screen: UpdateUser,
  },

  Login: {
    screen: Login,
  },

  Register: {
    screen: Register,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
