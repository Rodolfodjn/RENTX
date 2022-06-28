import React from 'react';

import {
    Container,
    Title
} from './styles';

interface Props  {
    color: string;
    title: string;
    
}

export function Button({
    color, 
    title,
    ...rest
}: Props){
    return (
        <Container {...rest} color={color}>
            <Title>{title}</Title>
        </Container>
    );
}