import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { Load } from '../../components/Load';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';
import { api } from '../../services/api';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const responde = await api.get('/users/@me/guilds');

        setGuilds(responde.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    },[]);

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                data={item}
                                onPress={() => handleGuildSelect(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 40, paddingTop: 80 }}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        style={styles.guilds}
                    />
            }
        </View>
    );
}

/* GUILDS LIST
const guilds = [
    {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true,
    },
    {
        id: '2',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
    {
        id: '3',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
    {
        id: '4',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
    {
        id: '5',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
    {
        id: '6',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
    {
        id: '7',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
    {
        id: '8',
        name: 'Cloud9',
        icon: 'image.png',
        owner: false,
    },
]
*/