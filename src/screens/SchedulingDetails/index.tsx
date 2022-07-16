import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Feather} from '@expo/vector-icons';

import {RFValue} from 'react-native-responsive-fontsize';

import {getAccessoryIcon} from '../../utils/getAccessoryIcon';
import {getPlatformDate} from '../../utils/getPlataformDate';
import {format} from 'date-fns';

import { Container,Header, CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Prince,
    Accessories,
    Footer,
    RentalPeriod,
    CaledarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPrinceLabel,
    RentalPrinceDetails,
    RentalPrinceQuota,
    RentalPrinceTotal,
    
} from './styles';
import { Button } from '../../components/Button';

import { useTheme } from 'styled-components';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { Ionicons } from 'expo-vector-icons';
import { api } from '../../services/api';
import { Alert } from 'react-native';



interface Params {
    car: CarDTO;
    dates: string[];
}

interface RentalPeriod {
    start: string;
    end: string;
}





export function SchedulingDetails(){
    const theme = useTheme();
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates} = route.params as Params;

    const rentTotal = Number(dates.length * car.rent.price)


    async function handleConfirmRental() { 
       const schedulesByCar = await api.get(`/shedules/${car.id}`);
       
       const unavailable_dates = [
        ...schedulesByCar.data.unavailable_dates,
        ...dates,
       ];
       
       api.put(`/shedules/${car.id}`, {
        id: car.id,
        unavailable_dates
       })
       .then(() => navigation.dispatch(CommonActions.navigate({name: 'SchedulingComplete'})))
       if(schedulesByCar.request == Error){
        Alert.alert('Não foi possivel agendar o carro, tente novamente.');
    }
    }
       
    function handleBack(){
        navigation.goBack();
    }

    useEffect (() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })
    }, [])
    
    

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>


            <CarImages>
            <ImageSlider 
                imageUrl = {car.photos}

            />
        </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand> {car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Prince>{car.rent.price}</Prince>
                    </Rent>
                </Details>

                <Accessories>
                 {
                        car.accessories.map(accessory => (
                        <Accessory
                         key={ accessory.type}
                         name={accessory.name}
                         icon={getAccessoryIcon(accessory.type)}
                         />
                        ))
                }
                  
                </Accessories>

                <RentalPeriod>
                    <CaledarIcon>
                        <Ionicons  
                        name="calendar"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                        />
                    </CaledarIcon>
                       
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>{rentalPeriod.start}</DateValue>
                        </DateInfo>

                        <Ionicons 
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                        />

                    <DateInfo>
                            <DateTitle>ATÉ</DateTitle>
                            <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>

                </RentalPeriod>

            <RentalPrice>
                <RentalPrinceLabel>TOTAL</RentalPrinceLabel>
                <RentalPrinceDetails>
                    <RentalPrinceQuota>R$ ${car.rent.price} x${dates.length} diárias</RentalPrinceQuota>
                    <RentalPrinceTotal>R$ {rentTotal}</RentalPrinceTotal>
                </RentalPrinceDetails>
            </RentalPrice>



            </Content>

                <Footer>
                    <Button title="Alguar agora" color={theme.colors.success} onPress={handleConfirmRental}/>
                </Footer>

        </Container>
    );
}