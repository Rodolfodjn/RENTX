import React, { useState } from 'react';
import { useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { Bullet } from '../Bullet';

import {
    Container, 
    ImageIndexs, 
    ImageIndex, 
    CarImageWrapper, 
    CarImage } from './styles';

    // interface Props {
    //     imageUrl: {
    //         id: string;
    //         photo: string;
    //     }[];
    // };

interface Props {
  imageUrl: string[];
}


// // 
//     interface Props {
//         id: string;
//         photos: CarDTO["photos"];
//       }


    interface ChangeImageProps {
        viewableItems: ViewToken[];
        changed: ViewToken[];
      }



export function ImageSlider({ imageUrl }: Props) {

        const [imageIndex, setImageIndex ] = useState(0);

        const indexChanged = useRef((info: ChangeImageProps) => {
            const index = info.viewableItems[0].index!;
            setImageIndex(index);
        });

        // const indexChanged = useRef((info: ChangeImageProps) => {
        //     setImageIndex(info.viewableItems[0].index!);
        //   });

    return (

        <Container>

        <ImageIndexs>
        {
            // imageUrl.map((item, index)=> (
            //     <Bullet key={String(item)}
            //                 active={} 
            //                 />
            // ))

            imageUrl.map((_, index) => (
                <ImageIndex 
                key={String(index)} 
                active={index === imageIndex} 
                />
              ))
        }

        </ImageIndexs>

       


{/* <CarImageWrapper> */}
        <FlatList
          data={imageUrl}
          keyExtractor={key => key}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
          renderItem={({ item }) => (
            <CarImageWrapper>
              <CarImage source={{ uri: item }} resizeMode="contain" />
            </CarImageWrapper>
          )}
        />
      {/* </CarImageWrapper> */}
    </Container>
  );
}