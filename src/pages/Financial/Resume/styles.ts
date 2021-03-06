import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { ICategoryData } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background };
`;

export const Content = styled.ScrollView`
    padding: 24px;
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary };
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.shape };
`;

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const CategoryList = styled(
    FlatList as new () => FlatList<ICategoryData>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { 
        paddingBottom: getBottomSpace(),
        padding: 24 
    }
})``;

export const MonthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(24)}px;
`;

export const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;