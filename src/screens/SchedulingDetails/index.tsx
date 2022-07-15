import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Feather} from '@expo/vector-icons';
import speedSvg from '../assets/SpeedSvg.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../assets/force.svg';
import gasolineSvg from '../assets/gasoline.svg';
import exchangeSvg from '../assets/exchange.svg';
import peopleSvg from '../assets/people.svg';

import {RFValue} from 'react-native-responsive-fontsize';


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
import { CommonActions, useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){
    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmRental() { 
        navigation.dispatch(CommonActions.navigate
            ({name: 'SchedulingComplete'})
        );
    }

    function handleBack(){
        navigation.goBack();
    }



    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>


            <CarImages>
            <ImageSlider 
                imageUrl = {['https://th.bing.com/th/id/R.8dfe458d49d2336d9c9e690a85ea73de?rik=vXbtBkLZlwwToA&riu=http%3a%2f%2fi0.statig.com.br%2fbancodeimagens%2f4g%2fx0%2fcb%2f4gx0cbijp8n7qf9suaplxbfza.jpg&ehk=5y%2floB32lW2vNbTQ2SI3svZ9V0b%2fMIdoWmU3aZohtpw%3d&risl=&pid=ImgRaw&r=0']}

            />
        </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand> Lamborghini</Brand>
                        <Name>hutacan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao Dia</Period>
                        <Prince>R$ 580</Prince>
                    </Rent>
                </Details>

                <Accessories>

                   <Accessory name='380km/h' icon={speedSvg}/>
                   <Accessory name='3.2s' icon={accelerationSvg}/>
                   <Accessory name='800 HP' icon={forceSvg}/>
                   <Accessory name='Gasolina' icon={gasolineSvg}/>
                   <Accessory name='Auto' icon={exchangeSvg}/>
                   <Accessory name='2 Pessoas' icon={peopleSvg}/>
                </Accessories>

                <RentalPeriod>
                    <CaledarIcon>
                        <Feather 
                        name="calendar"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                        />
                    </CaledarIcon>
                       
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>18/06/2022</DateValue>
                        </DateInfo>

                        <Feather 
                        name='calendar'
                        size={RFValue(24)}
                        color={theme.colors.shape}
                        />

                    <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>18/06/2022</DateValue>
                    </DateInfo>

                </RentalPeriod>

            <RentalPrice>
                <RentalPrinceLabel>TOTAL</RentalPrinceLabel>
                <RentalPrinceDetails>
                    <RentalPrinceQuota>R$ 580 x3 diarias</RentalPrinceQuota>
                    <RentalPrinceTotal>R$ 2.900</RentalPrinceTotal>
                </RentalPrinceDetails>
            </RentalPrice>



            </Content>

                <Footer>
                    <Button title="Alguar agora" color={theme.colors.success} onPress={handleConfirmRental}/>
                </Footer>

        </Container>
    );
}