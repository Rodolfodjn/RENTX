import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import {Car}from '../../components/Car';
// import { LoadAnimation } from '@components/LoadAnimation';

import {
    Container, 
    Content, 
    Header, 
    SubTitle, 
    Title,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarList,
    CarWrapper,
    RentalPeriod,
    Period,
    DateValueContainer,
    DateValue,   
} from './styles';
import { AntDesign } from "expo-vector-icons";
import { Load } from "../../components/Load";


export interface CarProps {
    id: string;
    user_id: string;
    car: CarDTO;
    startDate: string;
    endDate: string;
};




export function MyCars(){
        const [cars, setCars] = useState<CarDTO[]>([]);
        const [loading, setLoading] = useState(true);
        const navigation = useNavigation();
        const theme = useTheme();
        

        function handleBack(){
            navigation.goBack();
        }

        async function fetchCars() {
            const user_id = 1;
            try {
                const response = await api.get(`/schedules_byuser?user_id=${user_id}`);
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };
            useEffect(() => {
                fetchCars();
        
        }, []);

        

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
     
                     
         </Header>

     
         <Content>
            <Appointments>
                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
            </Appointments>

            {
            loading ? 
            <Load /> :
            <CarList
                keyExtractor={(item) => String(item.id)}
                data={cars}
                renderItem={({ item }) => (
                    <CarWrapper>
                        <Car data={item.car} />
                        <RentalPeriod>
                            <Period>Período</Period>
                            <DateValueContainer>
                                <DateValue>{item.startDate}</DateValue>
                                <AntDesign
                                    name="arrowright"
                                    size={20}
                                    color={theme.colors.text_detail}
                                />
                                <DateValue>{item.endDate}</DateValue>
                            </DateValueContainer>
                        </RentalPeriod>
                    </CarWrapper>
                )}
            />
            }

        </Content>

        </Container>


    ); 

}
