import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 65%;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 35%;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundDark };
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
`;

export const Legend = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundDark };
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium };
`;

export const FooterWrapper = styled.View`
    flex-direction: row;
    margin-top: ${RFPercentage(2)}px;
    padding: 0 15px;
    align-items: center;
    justify-content: center;
`;