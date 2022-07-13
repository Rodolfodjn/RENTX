import React from 'react';
import { StatusBar } from 'react-native';
import {Container,Header, HeaderContent, TotalCars, CarList} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import {Car} from '../../components/Car';
import {Load} from '../../components/Load';
import { CommonActions, NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

import {api} from '../../services/api';
import { useEffect, useState } from 'react';

import {CarDTO} from '../../dtos/CarDTO'; 



export function Home(){

    const navigation = useNavigation();

    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading ] = useState(true);

 

    
    function handleCarDetails(car: CarDTO) { 
        navigation.dispatch(
            CommonActions.navigate({
              name: 'CarDetails',
              params: {car},
            })
          );
        }
        

        


useEffect(() => {
    async function fetchCars(){
        try{
       const response = await api.get('/cars');
       setCars(response.data);


        }
        catch(error){
            console.log(error);
        } finally{
            setLoading(false);

        }
    }

    fetchCars();
}, []);



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

            { loading ? <Load /> :
            <CarList 
             data={cars}
             keyExtractor={item => item.id}
             renderItem={({ item }) =>
                  <Car data={item} onPress={() => handleCarDetails(item)} />
               
                }
              />
            }
        </Container>
    );
}
