import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  height: 70px;
  margin: 5px 5px;
`;

export const InfoBox = styled.View`
  width: 14%;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary };
  background: ${({ theme }) => theme.colors.background };
`;

export const Position = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
`;

export const NameBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 70%;
  margin: 0 3px;
  height: 70px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary };
  background: ${({ theme }) => theme.colors.background };
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
  margin-left: 8px;
`;

export const Points = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
`;