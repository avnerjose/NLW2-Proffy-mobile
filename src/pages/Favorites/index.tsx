import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import styles from './styles';


function Favorites() {

    const [favorites, setFavorites] = useState([]);

    function LoadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(() => {
        LoadFavorites();
    });
    
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />


            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                {favorites.map((teacher: Teacher) => {
                    return <TeacherItem teacher={teacher} key={teacher.id} favorited={true} />
                })}

            </ScrollView>
        </View>
    )
}

export default Favorites;