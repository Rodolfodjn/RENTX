import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg';
import {Calendar, dayProps, markedDateProps, generateInterval} from '../../components/Calendar';
import { Content, Footer,Container,Header, Title,RentalPeriod,DateInfo, DateTitle, DateValue
} from './styles';

import {format} from 'date-fns';
import { StatusBar, Alert } from 'react-native';

import { Button } from '../../components/Button';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { getPlatformDate } from '../../utils/getPlataformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface rentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
}





export function Scheduling() {
    const [lastSelectdDate, setLastSelectedDate] = useState<dayProps>({} as dayProps);
    const [markedDates, setMarkedDates] = useState<markedDateProps>({} as markedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<rentalPeriod>({} as rentalPeriod);
    
    const theme = useTheme();
    const navigation = useNavigation();

    const route = useRoute();
    const { car } = route.params as Params;


    function handleConfirmRental() { 
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
            Alert.alert('Selecione uma data no calendario para Alugar.');
        } else{
            navigation.dispatch(CommonActions.navigate
                ({name: 'SchedulingDetails', params: {car, dates: Object.keys(markedDates)}})
            );
        }      
        
               
    }

    function handleBack(){
        navigation.goBack();
    }

    function handleChangeDate(date:dayProps){
            let start = !lastSelectdDate.timestamp ? date : lastSelectdDate;
            let end = date;

            if(start.timestamp > end.timestamp){
                start = end;
                end = start;
            }
            
            setLastSelectedDate(end);
            const interval = generateInterval(start, end);
            setMarkedDates(interval);
    
    
            const firstDate = Object.keys(interval)[0];
            const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    
            setRentalPeriod({
                startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
                endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
            })
        }


    


    return (
        <Container>
            <Header>
                <StatusBar 
                  barStyle="light-content"
                  translucent
                  backgroundColor="transparent"
                />
                <BackButton onPress={handleBack} 
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
                    <DateValue selected= {!!rentalPeriod.startFormatted}>
                        {rentalPeriod.startFormatted}
                    </DateValue>
                </DateInfo>
            

            <ArrowSvg />

            <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue selected= {!!rentalPeriod.endFormatted}>
                        {rentalPeriod.endFormatted}
                    </DateValue>
                </DateInfo>
            </RentalPeriod>
         
         </Header>

            <Content>
                
                <Calendar  
                markedDates={markedDates}
                onDayPress={handleChangeDate}
                />

            </Content>

            <Footer>
                <Button title='Confirmar' color={''} onPress={handleConfirmRental} />
            </Footer>


        
        </Container>
    );
}