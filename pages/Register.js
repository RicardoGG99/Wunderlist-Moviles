import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//Formik
import { Formik } from 'formik';

//Icons
import { Octicons, Ionicons } from '@expo/vector-icons';

//styles
import { SignButton, SignButtonText } from '../styles/buttons'
import { Colors } from '../styles/colors'
import { WrapContainer, InnerContainer } from '../styles/containers'
import { LeftIcon, RightIcon } from '../styles/icons'
import { PageLogo } from '../styles/images'
import { TextInput, InputLabel, MessageBox, ExtraText, TextLink, TextLinkContent } from '../styles/texts'
import { PageTitle, SubTitle } from '../styles/titles'
import { FormArea, Division, ExtraView } from '../styles/views'

import { View } from 'react-native'

const { gray, darkLight } = Colors;


const Register = ({ navigation }) => {

    //useState
    const [hidePassword, setHidePassword] = useState(true)

    const pressHandler = () => {
        navigation.navigate('Login')
    }

    return (
        <WrapContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo  resizeMode="cover" source={require("../assets/wunderlist-logo.png")} />
                <PageTitle> Wunderlist </PageTitle>
                <SubTitle> Register a new Account: </SubTitle>

                <Formik
                    initialValues={{username: '', email: '', password: '', confPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {/* Funcion que retiene los input fields */}
                    
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) => (
                        <FormArea>
                            <MyTextInput 
                                label="Username"
                                icon="person"
                                placeholder="luisRG123"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                keyboardType="default"
                            />

                            <MyTextInput 
                                label="Email Address"
                                icon="mail"
                                placeholder="richardg@gmail.com"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />


                            <MyTextInput 
                                label="Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />

                            <MyTextInput 
                                label="Confirm Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('confPassword')}
                                onBlur={handleBlur('confPassword')}
                                value={values.confPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MessageBox>...</MessageBox>
                            <SignButton>
                                <SignButtonText>
                                    Sign Up
                                </SignButtonText>
                            </SignButton>
                            <Division />
                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                <TextLink onPress={pressHandler}>
                                    <TextLinkContent>Sign In</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </FormArea>)  
                    }
                </Formik>
            </InnerContainer>
        </WrapContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={gray} />
            </LeftIcon>

            <InputLabel>
                {label}
            </InputLabel>

            <TextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Register;