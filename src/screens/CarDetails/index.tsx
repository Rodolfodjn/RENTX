import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import { Container,Header, CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Prince,
    About,
    Accessories,
    Footer

} from './styles';
import { Button } from '../../components/Button';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import {getAccessoryIcon} from '../../utils/getAccessoryIcon';



interface Params {
    car: CarDTO;
}


export function CarDetails(){

    const navigation = useNavigation();

    const route = useRoute();
    const { car } = route.params as Params;



    function handleConfirmRental() { 
        navigation.dispatch(CommonActions.navigate
            ({name: 'Scheduling', params: {car}})
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
                        <Prince>R$ {car.rent.price} </Prince>
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

                <About>{car.about}</About>
            </Content>

                <Footer>
                    <Button title="Escolher o per??odo do Aluguel" color={''} onPress={handleConfirmRental}/>
                </Footer>


        </Container>
    );
}