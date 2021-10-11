import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  height: ${RFValue(130)}px;
  border-radius: 5px;
  margin: -85px 0 10px 0;
  align-items: center;
`;

export const LeaderInfo = styled.View`
  flex: 1;
  width: ${RFValue(175)}px;
  padding-top: 15px;
  margin: 0 10px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold };
`;

export const LeadersName = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold };
`;

export const Weeks = styled.Text`
  color: ${({ theme }) => theme.colors.gold };
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
  margin-top: 10px;
  margin-bottom: -15px;
`;