import React from 'react';
 import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import {Container,
    Content,
    Title,
    Message,
    Footer

} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';


export function SchedulingComplete(){
    const {width} = useWindowDimensions();

    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirm() { 
        navigation.dispatch(CommonActions.navigate
            ({name: 'Home'})
        );
    }





return (
    <Container>
            <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor='transparent' 
            />


        <LogoSvg width={width} />

        <Content>
            <DoneSvg width={80} height={80} />
            <Title>CARRO ALUGADO!</Title>

            <Message>
                Agora você só precisa ir {'/n'}
                até a concessionária da RENTX {'/n'}
                pegar o seu automovel.
            
            </Message>
        </Content>

        <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm}/>

        </Footer>


    </Container>
);

}