import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
// import CreateTask from '../pages/CreateTask'

const screens = {
    Dashboard: {
        screen: Dashboard
    },
    
    Login: {
        screen: Login
    },

    Register: {
        screen: Register
    },

    // CreateTask: {
    //     screen: CreateTask
    // }


}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 
