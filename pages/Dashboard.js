import React, { useState, useEffect } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

//Fetch
import { getRes } from '../connectionToBack/setGetRes';
import logoutFetch from '../connectionToBack/logoutFetch';

//Components
import DashboardTitle from '../components/DashboardTitle';
import RenderTask from '../components/RenderTask';

//styles
import { ButtonStyles } from '../styles/buttons';
import { Containers } from '../styles/containers';
import { Views } from '../styles/views';

//Constants declarations
const { WrapContainer, InnerContainer, DashboardContainer } = Containers;
const { FormArea } = Views;
const { SignIn, SignOut, TaskButton, TaskText } = ButtonStyles;

const Dashboard = ({ navigation }) => {
  const FlatListData = [
    {
      title: 'Release my new album',
      id: 1,
      color: '#9CA3AF',
    },

    {
      title: 'Record smt',
      id: 2,
      color: '#9CA3AF',
    },

    {
      title: 'Practice piano',
      id: 3,
      color: '#9CA3AF',
    },
  ];

  //useState y useEffect
  const [show, setShow] = useState('');

  useEffect(() => {
    setShow(FlatListData);
  }, []);

  //Redirects
  const logIn = () => {
    navigation.navigate('Login');
  };

  const logOut = async () => {
    await logoutFetch();
    const response = getRes();

    if (response == 'Success') {
      alert('Logged Out!');
      goToDashboard();
    } else {
      alert('You Must have a Session!');
      logIn();
    }
  };

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const goToUpdateUser = () => {
    navigation.navigate('UpdateUser');
  };

  const goToCreateTask = () => {
    navigation.navigate('CreateTask');
  };

  //Render Flatlist Items
  const renderItem = ({ item, index }) => {
    return <RenderTask item={item} index={index} show={show} setShow={setShow} />;
  };

  return (
    <View style={WrapContainer}>
      <StatusBar style="light" />
      <View style={InnerContainer}>
        <View style={DashboardContainer}>
          <DashboardTitle show={show} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />

          <View style={FormArea}>
            <View style={SignIn}>
              <Ionicons onPress={logIn} name="log-in-outline" size={49} />
            </View>
            <View style={SignOut}>
              <Ionicons onPress={logOut} name="log-out-outline" size={45} />
            </View>
          </View>
        </View>
      </View>

      <TouchableHighlight onPress={goToCreateTask}>
        <View style={TaskButton}>
          <Text style={TaskText}>Create a New Task</Text>
        </View>
      </TouchableHighlight>
      {/* <TouchableHighlight>
        <View style={TaskButton}>
          <Text style={TaskText} onPress={goToUpdateUser}>
            Update your user
          </Text>
        </View>
      </TouchableHighlight> */}
    </View>
  );
};

export default Dashboard;
