import React from 'react';

import {
    Container, 
    ImageIndexs, 
    ImageIndex, 
    CarImageWrapper, 
    CarImage } from './styles';

    interface Props{
        imageUrl: string[];
    }

    export function ImageSlider({imageUrl}: Props) {
    return (

        <Container>

        <ImageIndexs>

        <ImageIndex active = {true} />
        <ImageIndex active = {true} />
        <ImageIndex active = {true} />
        <ImageIndex active = {true} />
        
        </ImageIndexs>

        <CarImageWrapper>
            <CarImage source = {{uri: ''}}
            resizeMode= "contain"/>
        
        </CarImageWrapper>

        </Container>
    );
}