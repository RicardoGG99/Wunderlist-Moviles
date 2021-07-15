import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

//styles
import { ButtonStyles } from '../styles/buttons';
import { Containers } from '../styles/containers';
import { Images } from '../styles/images';
import { Texts } from '../styles/texts';
import { Titles } from '../styles/titles';
import { Views } from '../styles/views';

//Components
import IconInputManager from '../components/IconInputManager';

//Fetch
import loginFetch from '../connectionToBack/loginFetch';
import { getRes } from '../connectionToBack/setGetRes';

//Constants declarations
const { WrapContainer, InnerContainer } = Containers;
const { PageLogo } = Images;
const { PageTitle, SubTitle } = Titles;
const { FormArea, Division, ExtraView } = Views;
const { MessageBox, ExtraText, TextLink, TextLinkContent } = Texts;
const { SignButton, SignButtonText } = ButtonStyles;

const Login = ({ navigation }) => {
  //useState
  const [hidePassword, setHidePassword] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Log = async () => {
    await loginFetch(username, password);

    const response = getRes();
    console.log(response);

    if (response == 'Success') {
      alert('Logged Successfully');
      goToDashboard();
    } else {
      alert('Credentials are not correct');
      setUsername('');
      setPassword('');
    }
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView>
      <View style={WrapContainer}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>
          <Image style={PageLogo} resizeMode="cover" source={require('../assets/wunderlist-logo.png')} />
          <Text style={PageTitle}> Wunderlist </Text>
          <Text style={SubTitle}> Log to your Account: </Text>

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {/* Funcion que retiene los input fields */}

            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={FormArea}>
                <IconInputManager
                  label="Username"
                  icon="person-circle-sharp"
                  placeholder="luisRG123"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  keyboardType="default"
                  onChangeText={(username) => setUsername(username)}
                  value={username}
                />

                <IconInputManager
                  label="Password"
                  icon="ios-lock-closed"
                  placeholder="********"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                />
                {/* <Text style={MessageBox}>...</Text> */}
                <TouchableOpacity style={SignButton} onPress={Log}>
                  <Text style={SignButtonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={Division} />
                <View style={ExtraView}>
                  <Text style={ExtraText}>Don't have an account already? </Text>
                  <TouchableOpacity style={TextLink} onPress={goToRegister}>
                    <Text style={TextLinkContent}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
