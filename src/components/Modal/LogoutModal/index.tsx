import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { useAuth } from '../../../hooks/Auth';
import { SvgProps } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  Content,
  SvgContainer,
  TitleContainer,
  Title,
  FoldButtonContainer,
  FoldButton,
  FoldText,
  CancelButtonContainer,
  CancelButton,
  CancelText
} from './styles';

interface IProps {
    svg: React.FC<SvgProps>
    title: string;
    firstLabel?: string;
    secondLabel?: string;
}

export default function LogoutModal({
    svg: Svg,
    title,
    firstLabel,
    secondLabel
}: IProps) {
    const { signOut } = useAuth();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleLogout = () => {
        setIsVisible(false);
        signOut();
    };

    const handleCancel = () => {
        setIsVisible(false);
    };

  return (
    <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
    >
        <Container>
            <Content>
                <SvgContainer>
                    <Svg 
                        width={RFValue(260)}
                        height={RFValue(145)}
                    />
                </SvgContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <FoldButtonContainer>
                    <FoldButton
                        onPress={handleLogout}
                    >
                        <FoldText>
                            {firstLabel}
                        </FoldText>
                    </FoldButton>
                </FoldButtonContainer>
                <CancelButtonContainer>
                    <CancelButton
                        onPress={handleCancel}
                    >
                        <CancelText>
                            {secondLabel}
                        </CancelText>
                    </CancelButton>
                </CancelButtonContainer>
            </Content>
        </Container>
    </Modal>
  );
};