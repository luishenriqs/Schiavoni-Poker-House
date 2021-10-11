import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 410px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(-390)}px;
  padding: 15px 0;
  background: ${({ theme }) => theme.colors.backgroundLight };
`;

export const GameSheet = styled.View`
  width: 75%;
  align-items: center;
  padding: 8px 0;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.backgroundDark };
`;

export const InfoList = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.gold };
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
`;

export const FirstText = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
`;

export const LastText = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
`;
