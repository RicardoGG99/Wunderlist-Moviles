import styled from 'styled-components/native';

import { Colors } from './colors'
const { darkLight } = Colors

export const FormArea = styled.View`
    width: 90%;
`; 

export const Division = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;