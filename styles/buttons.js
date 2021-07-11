import styled from 'styled-components/native';

import { Colors } from './colors'
const { primary } = Colors

export const SignButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: lightseagreen;
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const SignButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
    text-align: center;
`;