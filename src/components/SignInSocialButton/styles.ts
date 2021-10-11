import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    height: ${RFValue(100)}px;
    width: ${RFValue(150)}px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0 10px;
`;
