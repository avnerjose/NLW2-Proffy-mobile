import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function LoadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
        AsyncStorage.removeItem('onboard');
    }
    useFocusEffect(() => {
        LoadFavorites();
    })
    function handleTogleFilter() {

        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        LoadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setTeachers(response.data.classes)
        setIsFiltersVisible(false);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleTogleFilter}>
                        <Icon name="filter" size={20} color="#FFF" />
                    </BorderlessButton>)}
            >
                {isFiltersVisible &&
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <DropDownPicker

                            items={[
                                { label: 'Artes', value: 'Artes' },
                                { label: 'Biologia', value: 'Biologia' },
                                { label: 'Ciências', value: 'Ciências' },
                                { label: 'Eduação Física', value: 'Eduação Física' },
                                { label: 'Física', value: 'Física' },
                                { label: 'Geografia', value: 'Geografia' },
                                { label: 'História', value: 'História' },
                                { label: 'Matemática', value: 'Matemática' },
                                { label: 'Português', value: 'Português' },
                                { label: 'Química', value: 'Química' },
                            ]}
                            placeholder="Selecione"
                            containerStyle={{ height: 40 }}
                            style={styles.input}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => setSubject(item.value)}
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    value={week_day}
                                    placeholder="Qual o dia?"
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    value={time}
                                    placeholder="Qual o horário?"
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                }
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                {teachers && teachers.map((teacher: Teacher) =>
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)} />)}
            </ScrollView>
        </View>
    )
}

export default TeacherList;