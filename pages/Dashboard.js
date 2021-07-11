import React from 'react';
import { StatusBar } from 'expo-status-bar';

//styles
import { SignButton, SignButtonText } from '../styles/buttons'
import { WrapContainer, InnerContainer, DashboardContainer } from '../styles/containers'
import { DashboradImage, Avatar } from '../styles/images'
// import { PageTitle, SubTitle } from '../styles/titles'
import { FormArea, Division } from '../styles/views'


const Dashboard = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('Login')
    }

    return (
        <WrapContainer>
            <StatusBar style="light" />
            <InnerContainer>
                <DashboardContainer>
                    <DashboradImage resizeMode="" source={require("../assets/wunderlist-logo.png")} />
                        {/* <PageTitle dashboard={true}> Welcome Buddy </PageTitle>
                        <SubTitle dashboard={true}> Olga Simpson </SubTitle>
                        <SubTitle dashboard={true}> olga123 </SubTitle>
                        <SubTitle dashboard={true}> olga123@gmail.com </SubTitle> */}
                            <FormArea>
                                {/* <Avatar  resizeMode="cover" source={require("../assets/wunderlist-logo.png")} /> */}
                                <Division />
                                <SignButton onPress={() => {}}>
                                    <SignButtonText onPress={pressHandler}>
                                        Log Out
                                    </SignButtonText>
                                </SignButton>
                            </FormArea>  
                </DashboardContainer>
            </InnerContainer>
        </WrapContainer>
    );
};

export default Dashboard;