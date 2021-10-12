import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.dark };

`;

export const SvgContainer = styled.View`
    background: ${({ theme }) => theme.colors.dark };
`;

export const TitleContainer = styled.View`
    width: ${RFValue(260)}px;
    height: 80px;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
  align-items: center;
`;

export const FoldButtonContainer = styled.View`
    width: ${RFValue(260)}px;
    align-items: center;
    justify-content: center;
    height: 50px;
`;

export const FoldButton = styled.TouchableOpacity`
`;

export const FoldText = styled.Text`
  color: ${({ theme }) => theme.colors.success };
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
  align-items: center;
`;

export const CancelButtonContainer = styled.View`
    width: ${RFValue(260)}px;
    align-items: center;
    justify-content: center;
    height: 50px;
`;

export const CancelButton = styled.TouchableOpacity`
`;

export const CancelText = styled.Text`
  color: ${({ theme }) => theme.colors.attention };
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium };
  align-items: center;
`;