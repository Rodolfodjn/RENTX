import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import speedSvg from '../../assets/SpeedSvg.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';


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
    Accessories

} from './styles';

export function CarDetails(){
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
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

                <About>
                    Este é o automóvel desportivo. Surgiu do lendário tourode lide
                    indultado na praça Real Maestranza de Sevilla. É um belissimo carro
                    para quem gosta de acelerar.

                </About>



            </Content>




        </Container>
    );
}