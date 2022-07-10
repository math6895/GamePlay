import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
    const uri = 'https://static.wikia.nocookie.net/40b1a6b4-887a-4b88-931c-4c8f0c404145';
    return(
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />   
    );
}