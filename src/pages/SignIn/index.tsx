import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { useAuth } from '../../hooks/Auth';
import { useTheme } from 'styled-components';
//===> expo install expo-linear-gradient;
import { LinearGradient } from 'expo-linear-gradient';
import SignInSocialButton from '../../components/SignInSocialButton';
//==> yarn add --dev react-native-svg-transformer;
/* Obs: Importante fazer a tipagem dos arquivos 'svg' na pasta '@types' */
/* Obs 2: Necessária a configuração do 'metro.config.js' - Veja documentação;'*/
import LogoSvg from '../../assets/logoOficial/schiavoniOficial.svg';
import GoogleSvg from '../../assets/logoOficial/google.svg';
import AppleSvg from '../../assets/logoOficial/apple.svg';
import {
    Container,
    Header,
    Footer,
    FooterWrapper,
    Title,
    Legend,
} from './styles';

export function SignIn() {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google');
            setIsLoading(false);
        }
    };

    async function handleSignInWithApple() {
        try {
            setIsLoading(true);
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Apple');
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#363636"
                translucent
            />
            <LinearGradient
                colors={['#363636', 'rgba(169, 169, 169, 0.9)']}
            >
                <Header>
                    <LogoSvg 
                        width={RFValue(270)}
                        height={RFValue(270)}
                    />
                </Header>
                <Footer>
                    <Title>Only legends play here</ Title>
                    <Legend>Are you ready to play?</ Legend>
                    <FooterWrapper>
                        <SignInSocialButton 
                            svg={GoogleSvg}
                            onPress={handleSignInWithGoogle}
                        />
                        <SignInSocialButton 
                            svg={AppleSvg}
                            onPress={handleSignInWithApple}
                        />
                    </FooterWrapper>
                    { isLoading &&
                        <ActivityIndicator
                            color={theme.colors.shape}
                            style={{ marginTop: 18 }}
                        />
                    }
                </Footer>
            </LinearGradient>
        </Container>
    );
};