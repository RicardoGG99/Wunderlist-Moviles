import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

//styles
import { ButtonStyles } from '../styles/buttons'
import { Containers } from '../styles/containers'
import { Images } from '../styles/images'
import { Texts } from '../styles/texts'
import { Titles } from '../styles/titles'
import { Views } from '../styles/views'

//Components
import IconInputManager from '../components/IconInputManager'

//Fetch
import registerFetch from '../connectionToBack/registerFetch'

//Constants declarations
const { WrapContainer, InnerContainer } = Containers
const { PageLogo } = Images
const { PageTitle, SubTitle } = Titles
const { FormArea, Division, ExtraView } = Views
const { MessageBox, ExtraText, TextLink, TextLinkContent } = Texts
const { SignButton, SignButtonText } = ButtonStyles


const Register = ({ navigation }) => {

    //useState
    const [hidePassword, setHidePassword] = useState(true)

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const Log = () => {
        if(password == confPassword){

            if(registerFetch(username, email, password)){
                console.log('Epa')
            }

            // if(message == 'Success'){
            //     alert('Usuario Registrado Exitosamente')
            //     // goToLogin()
            // }else{
            //     alert('hola')
            // }
        }else{
            alert('The password confirmation is not correct')
        }
    }

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
        <View style={WrapContainer}>
            <StatusBar style="dark" />
            <View style={InnerContainer}>
                <Image style={PageLogo}  resizeMode="cover" source={require("../assets/wunderlist-logo.png")} />
                <Text style={PageTitle}> Wunderlist </Text>
                <Text style={SubTitle}> Register a new Account: </Text>

                <Formik
                    initialValues={{username: '', email: '', password: '', confPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {/* Funcion que retiene los input fields */}
                    
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) => (
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
                                onChangeText={username => setUsername(username)}
                                value={username}
                            />

                            <IconInputManager 
                                label="Email Address"
                                icon="mail"
                                placeholder="richardg@gmail.com"
                                placeholderTextColor="#9CA3AF"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                onChangeText={email => setEmail(email)}
                                value={email}
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
                                onChangeText={password => setPassword(password)}
                                value={password}
                            />

                            <IconInputManager 
                                label="Confirm Password"
                                icon="ios-lock-closed"
                                placeholder="********"
                                placeholderTextColor="#9CA3AF"
                                onChangeText={handleChange('confPassword')}
                                onBlur={handleBlur('confPassword')}
                                value={values.confPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                onChangeText={confPassword => setConfPassword(confPassword)}
                                value={confPassword}
                            />
                            {/* <Text style={MessageBox}>...</Text> */}
                            <TouchableOpacity style={SignButton} onPress={Log}>
                                <Text style={SignButtonText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                            <View style={Division} />
                            <View style={ExtraView}>
                                <Text style={ExtraText}>Already have an account? </Text>
                                <TouchableOpacity style={TextLink} onPress={goToLogin}>
                                    <Text style={TextLinkContent}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)  
                    }
                </Formik>
            </View>
        </View>
    </ScrollView>
    );
};


export default Register;