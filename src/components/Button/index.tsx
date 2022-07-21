import React from 'react';
import { useTheme } from 'styled-components';

import {
    Container,
    Title
} from './styles';

interface Props  {
    color: string;
    title: string;
    onPress: () => void;
    enabled?: boolean;
    
}

export function Button({
    color, 
    title,
    onPress,
    enabled= true
}: Props){

    const theme = useTheme();

    return (
        <Container color={color ? color : theme.colors.main} onPress={onPress} enabled={enabled} sytle={{opacity: enabled ? .5 : .3}}>
            <Title>{title}</Title>
        </Container>
    );
}