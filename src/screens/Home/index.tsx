import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';


export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '24/07 às 19:20h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'BR Team',
                icon: null,
                owner: false
            },
            category: '3',
            date: '17/07 às 14:30h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '3',
            guild: {
                id: '3',
                name: 'Cloud9',
                icon: null,
                owner: false
            },
            category: '2',
            date: '12/07 às 21:15h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '4',
            guild: {
                id: '4',
                name: 'INTZ',
                icon: null,
                owner: false
            },
            category: '4',
            date: '10/07 às 21:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '5',
            guild: {
                id: '5',
                name: 'Team Liquid',
                icon: null,
                owner: true
            },
            category: '4',
            date: '08/07 às 20:45h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '6',
            guild: {
                id: '6',
                name: 'FaZe Clan',
                icon: null,
                owner: false,
            },
            category: '1',
            date: '010/07 às 15:30h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(categoryId: string) {
        navigation.navigate('AppointmentDetails');
    }
    function handleAppointmentCreate(categoryId: string) {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item} 
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 40}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                />
        </Background>
    );
}