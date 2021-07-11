import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

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
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 
