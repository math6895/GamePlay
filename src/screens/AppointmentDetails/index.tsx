import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { styles } from './styles';



type Params = {
    guildSelected: AppointmentProps
}

export function AppointmentDetails() {
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    async function fetchGuildInfo(){
        try{
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
        }catch (error) {

        }
    }

    const members = [
        {
            id: '1',
            username: 'WillTheWise',
            avatar_url: 'https://github.com/math6895.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Adelina119',
            avatar_url: 'https://github.com/math6895.png',
            status: 'online'
        },
        {
            id: '3',
            username: 'Marcio_LFC',
            avatar_url: 'https://github.com/math6895.png',
            status: 'offline'
        },
        {
            id: '4',
            username: 'BOT S2',
            avatar_url: 'https://github.com/math6895.png',
            status: 'online'
        },
        {
            id: '5',
            username: 'Gladston',
            avatar_url: 'https://github.com/math6895.png',
            status: 'online'
        },
        {
            id: '6',
            username: 'Alvim Lolzeiro',
            avatar_url: 'https://github.com/math6895.png',
            status: 'online'
        },
        {
            id: '7',
            username: 'Renato Rodrigues',
            avatar_url: 'https://github.com/math6895.png',
            status: 'online'
        },
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        { guildSelected.guild.name }
                    </Text>
                    <Text style={styles.subtitle}>
                        { guildSelected.descritpion }
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}