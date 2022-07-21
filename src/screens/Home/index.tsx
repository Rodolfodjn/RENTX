import React from 'react';
import { StatusBar } from 'react-native';
import {Container,Header, HeaderContent, TotalCars, CarList, MyCarsButton} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Ionicons} from '@expo/vector-icons';

import Logo from '../../assets/logo.svg';
import {Car} from '../../components/Car';
import {Load} from '../../components/Load';
import { CommonActions, NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

import {api} from '../../services/api';
import { useEffect, useState } from 'react';

import {CarDTO} from '../../dtos/CarDTO'; 
import { useTheme } from 'styled-components';
import { MaterialCommunityIcons, MaterialIcons } from 'expo-vector-icons';



export function Home(){

    const navigation = useNavigation();

    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading ] = useState(true);

 const theme = useTheme();

    
    function handleCarDetails(car: CarDTO) { 
      navigation.navigate('CarDetails', { car });
        };

    function handleOpenMyCars() { 
            navigation.dispatch(
                CommonActions.navigate({
                  name: 'MyCars',
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
                {
                    !loading && <TotalCars>{`Total de ${cars.length} carros`}</TotalCars> 
                }
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

            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons  
                name="ios-car-sport"
                size={32}
                color= {theme.colors.shape}
                
                />
            </MyCarsButton>


        </Container>
    );
}
