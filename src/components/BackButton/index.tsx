import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {BorderlessButtonProps} from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';
import { MaterialIcons } from 'expo-vector-icons';
import { TouchableOpacityProps } from 'react-native';

import {
    Container
} from './styles';


interface BackButtonProps extends TouchableOpacityProps {
    color?: string;
  }

  
export function BackButton({color, ...rest}: BackButtonProps){
    const theme = useTheme();


    return (
        <Container {...rest}>

        <MaterialIcons 
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
        />

        </Container>
    );
}