import React from 'react';
import { Image , View } from 'react-native';

import { styles } from './styles';
import DiscordSvg  from '../../assets/discord.svg';

const {CDN_IMAGE} =process.env;

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({guildId, iconId}: Props){
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    //'https://static.wikia.nocookie.net/40b1a6b4-887a-4b88-931c-4c8f0c404145';

    return(
        <View style={styles.container}>
            {
                iconId ? 
                <Image 
                    source={{ uri }}
                    style={styles.image}
                    resizeMode="cover"
                /> 
                :
                <DiscordSvg 
                    width={40}
                    height={40}
                />               
            }
        </View>
    );
}