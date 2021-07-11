import styled from 'styled-components/native';

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: lightseagreen;
    padding: 10px;

    ${(props) => props.dashboard && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: black;

    ${(props) => props.dashboard && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;