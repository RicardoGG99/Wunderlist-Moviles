import React from 'react';
import { StatusBar } from 'expo-status-bar';

//styles
import { StyledButton, StyledButtonText } from '../styles/buttons'
import { StyledContainer, InnerContainer, WelcomeContainer } from '../styles/containers'
import { WelcomeImage, Avatar } from '../styles/images'
import { PageTitle, SubTitle } from '../styles/titles'
import { StyledFormArea, Line } from '../styles/views'


const Welcome = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('Register')
    }

    return (
        <StyledContainer>
            <StatusBar style="light" />
            <InnerContainer>
                
                

                <WelcomeContainer>
                    <WelcomeImage resizeMode="cover" source={require("../assets/img1.png")} />
                        <PageTitle welcome={true}> Welcome Buddy </PageTitle>
                        <SubTitle welcome={true}> Olga Simpson </SubTitle>
                        <SubTitle welcome={true}> olga123 </SubTitle>
                        <SubTitle welcome={true}> olga123@gmail.com </SubTitle>
                            <StyledFormArea>
                                <Avatar  resizeMode="cover" source={require("../assets/img1.png")} />
                                <Line />
                                <StyledButton onPress={() => {}}>
                                    <StyledButtonText onPress={pressHandler}>
                                        Log Out
                                    </StyledButtonText>
                                </StyledButton>
                                
                            </StyledFormArea>  
                </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Welcome;