import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from '../../assets/gasoline.svg';
import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Prince,
    Type,
    CarImage

} from './style';

import {CarDTO} from '../../dtos/CarDTO';


interface Props extends RectButtonProps{
    data: CarDTO;
}

export function Car({data, ...rest} : Props){
    return (
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Prince>{`R$ ${data.rent.price}`}</Prince>
                    </Rent>

                    <Type>
                        <GasolineSvg/>
                    </Type>
                </About>

            </Details>

            <CarImage source={{uri: data.thumbnail}}
                        resizeMode="contain"
            />

        </Container>

    );
}