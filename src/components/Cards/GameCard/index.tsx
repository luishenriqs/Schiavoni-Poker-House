import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import {
    Container,
    Content,
    GameSheet,
    InfoList,
    DateText,
    FirstText,
    LastText,
 } from './styles';

interface IProps {
    date: string,
    svg: React.FC<SvgProps>
    first: string,
    second: string,
    third: string,
    fourth: string,
    fifth: string,
    sixth: string,
    seventh: string,
    eighth: string,
    ninth: string,
    tenth: string,
}

export default function GameCard({
    date,
    svg: Svg,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
}: IProps) {
    return (
        <Container>
            <Svg 
                width={RFValue(365)}
                height={RFValue(365)}
            />
            <Content>
                <GameSheet>
                    <DateText>{date}</DateText>
                    <InfoList>
                        <FirstText>1º - {first}</FirstText>
                        <FirstText>2º - {second}</FirstText>
                        <FirstText>3º - {third}</FirstText>
                        <LastText>4º - {fourth}</LastText>
                        <LastText>5º - {fifth}</LastText>
                        <LastText>6º - {sixth}</LastText>
                        <LastText>7º - {seventh}</LastText>
                        <LastText>8º - {eighth}</LastText>
                        <LastText>9º - {ninth}</LastText>
                        <LastText>10º - {tenth}</LastText>
                    </InfoList>
                </GameSheet>
            </Content>
        </Container>
    );
}
