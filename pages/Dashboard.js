import React from 'react';
import { TouchableHighlight, Text, View, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';


//styles
import { ButtonStyles } from '../styles/buttons'
import { Containers } from '../styles/containers'
import { Images } from '../styles/images'
import { Views } from '../styles/views'

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers
const { DashboardImage } = Images
const { FormArea, Division } = Views
const { SignOut, TaskButton, TaskText } = ButtonStyles

const Dashboard = ({ navigation }) => {

    const logOut = () => {
        navigation.navigate('Login')
    }

    // const createTask = () => {
    //     navigation.navigate('CreateTask')
    // }

    return (
        <View style={WrapContainer}>
            <StatusBar style="light" />
            <View style={InnerContainer}>
                <View style={DashboardContainer}>
                    <Image style={DashboardImage} resizeMode="cover" source={require("../assets/wunderlist-logo.png")} />
                            <View style={FormArea}>
                                <View style={Division} />
                                <View style={SignOut}>
                                    <Ionicons onPress={logOut} name="log-out" size={45}  />
                                </View>
                            </View>
                    </View>
            </View>
                    <TouchableHighlight>
                        <View style={TaskButton}>
                            <Text style={TaskText} onPress={() => {}}>Create a New Task</Text>
                        </View>
                    </TouchableHighlight>
             </View>
    );
};

export default Dashboard;