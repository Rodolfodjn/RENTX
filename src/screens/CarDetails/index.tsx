import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';


import { Container,Header, CarImages } from './styles';

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

        </Container>
    );
}