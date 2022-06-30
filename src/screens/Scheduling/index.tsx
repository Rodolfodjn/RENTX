import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg';
import {Calendar} from '../../components/Calendar';
import { Content, Footer,Container,Header, Title,RentalPeriod,DateInfo, DateTitle, DateValue

} from './styles';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { CommonActions, useNavigation } from '@react-navigation/native';

export function Scheduling() {

    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmRental() { 
        navigation.dispatch(CommonActions.navigate
            ({name: 'SchedulingDetails'})
        );
    }



    return (
        <Container>
            <Header>
                <StatusBar 
                  barStyle="light-content"
                  translucent
                  backgroundColor="transparent"
                />
                <BackButton onPress={() => {}} 
                color={theme.colors.shape}
                />

                <Title>
                Escolha uma{'\n'}
                Data de inicio e {'\n'}
                fim do aluguel    
                </Title> 
     
            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected= {true}></DateValue>
                </DateInfo>
            

            <ArrowSvg />

            <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue selected= {true}></DateValue>
                </DateInfo>
            </RentalPeriod>
         
         </Header>

            <Content>
                
            </Content>

            <Footer>
                <Button title='Confirmar' color={''} onPress={handleConfirmRental} />
            </Footer>


        
        </Container>
    );
}