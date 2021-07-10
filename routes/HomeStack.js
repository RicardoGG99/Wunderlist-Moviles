import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Welcome from '../pages/Welcome'

const screens = {
    Login: {
        screen: Login
    },

    Register: {
        screen: Register
    },

    Welcome: {
        screen: Welcome
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 
