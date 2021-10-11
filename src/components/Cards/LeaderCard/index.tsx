import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import {
    Container,
    LeaderInfo,
    Title,
    LeadersName,
    Weeks,
 } from './styles';

interface IProps {
    svg: React.FC<SvgProps>
    title: string;
    leadersName: string;
    weeks: string;
}

export default function LeaderCard({
    svg: Svg,
    title,
    leadersName,
    weeks,
}: IProps) {
    return (
        <Container>
            <Svg 
                width={RFValue(130)}
            />
            <LinearGradient
                colors={['#363636', '#A9A9A9', '#363636']}
            >
                <LeaderInfo>
                    <Title>{title}</Title>
                    <LeadersName>{leadersName}</LeadersName>
                    <Weeks>{weeks}</Weeks>
                </LeaderInfo>
            </LinearGradient>
        </Container>
    );
}
