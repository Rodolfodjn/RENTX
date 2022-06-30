import React from 'react';
import { StatusBar } from 'react-native';
import {Container,Header, HeaderContent, TotalCars, CarList} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import {Car} from '../../components/Car';
import { CommonActions, NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

export function Home(){

    const navigation = useNavigation();

const carData = {
        brand: 'Audi',
        name: 'RS 5 COUPE',
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnail: 'https://th.bing.com/th/id/R.8dfe458d49d2336d9c9e690a85ea73de?rik=vXbtBkLZlwwToA&riu=http%3a%2f%2fi0.statig.com.br%2fbancodeimagens%2f4g%2fx0%2fcb%2f4gx0cbijp8n7qf9suaplxbfza.jpg&ehk=5y%2floB32lW2vNbTQ2SI3svZ9V0b%2fMIdoWmU3aZohtpw%3d&risl=&pid=ImgRaw&r=0'
        
    }
    
    function handleCarDetails() { 
        navigation.dispatch(CommonActions.navigate
            ({name: 'CarDetails'})
        );
    }


    return(
        <Container>
            <StatusBar 
            barStyle = "light-content"
            backgroundColor="transparent"
            translucent/>
            
            <Header>
                <HeaderContent>
               <Logo 
               width={RFValue(108)}
               height={RFValue(12)}/>
               <TotalCars>Total de 12 carros</TotalCars>
               </HeaderContent> 
            </Header>
            <CarList 
            data={[ 1,2,3]}
            keyExtractor={item => String(item)}
            renderItem={({ item}) => <Car data={carData}
            onPress={handleCarDetails} />
        }

            />
            
        </Container>
    );
}