import React, { useState , useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation , useFocusEffect } from '@react-navigation/native';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment , AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', {guildSelected});
    }
    function handleAppointmentCreate(categoryId: string) {
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointments(){
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category ===category));        
        }else{
            setAppointments(storage)
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    },[category]));

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
                        subtitle={`Total: ${appointments.length}` }
                    />               
            {
                loading ? <Load /> :
                <>    
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                                data={item} 
                                onPress={() =>handleAppointmentDetails(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{paddingBottom: 40}}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            }    
        </Background>
    );
}

/* OLD APPOINTMENTS
const appointments = [
    {
        id: '1',
        guild: {
            id: '1',
            name: 'Lend??rios',
            icon: null,
            owner: true
        },
        category: '1',
        date: '24/07 ??s 19:20h',
        description: '?? hoje que vamos chegar ao challenger sem perder uma partida da md10',
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
        date: '17/07 ??s 14:30h',
        description: '?? hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
]
*/