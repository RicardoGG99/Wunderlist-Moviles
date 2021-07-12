import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';

//styles
import { ButtonStyles } from '../styles/buttons'
import { Containers } from '../styles/containers'
import { Icons } from '../styles/icons'
import { Images } from '../styles/images'
import { Texts } from '../styles/texts'
import { Titles } from '../styles/titles'
import { Views } from '../styles/views'

//Constants declarations
const { WrapContainer, InnerContainer } = Containers
const { LeftIcon, RightIcon } = Icons
const { PageLogo } = Images
const { PageTitle, SubTitle } = Titles
const { FormArea, Division, ExtraView } = Views
const { textInput, InputLabel, MessageBox, ExtraText, TextLink, TextLinkContent } = Texts
const { SignButton, SignButtonText } = ButtonStyles


const Register = ({ navigation }) => {

    //useState
    const [hidePassword, setHidePassword] = useState(true)

    const pressHandler = () => {
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
                            />
                            <Text style={MessageBox}>...</Text>
                            <TouchableOpacity style={SignButton}>
                                <Text style={SignButtonText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                            <View style={Division} />
                            <View style={ExtraView}>
                                <Text style={ExtraText}>Already have an account? </Text>
                                <TouchableOpacity style={TextLink} onPress={pressHandler}>
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

const IconInputManager = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <TouchableOpacity style={LeftIcon}>
                <Ionicons name={icon} size={27} color="#787878" />
            </TouchableOpacity>

            <Text style={InputLabel}>
                {label}
            </Text>

            <TextInput style={textInput} {...props} />
            {isPassword && (
                <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color="#9CA3AF" />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Register;