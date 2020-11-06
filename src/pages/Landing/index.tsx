import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'
import LandingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Authprovider';

function Landing() {

    const { setOnboarding } = useContext(AuthContext);
    const navigation = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);


    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, []);

    async function handleNavigateToGiveClasses() {

        await setOnboarding(false);
        //navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('StudyTabs');
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerProfileView}>
                    <Image
                        style={styles.headerProfileImage}
                        source={{
                            uri: 'https://avatars3.githubusercontent.com/u/49520658?s=460&v=4',
                        }} />
                    <Text style={styles.headerProfileText}>Avner José</Text>
                </TouchableOpacity>
                <RectButton>
                    <Image source={require('../../assets/images/logout.png')} />
                </RectButton>
            </View>

            <Image style={styles.banner} source={LandingImage} />

            <Text style={styles.title}>
                Seja bem vindo,{'\n'}
                <Text style={styles.titleBold}>O que deseja fazer? </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton
                    onPress={handleNavigateToGiveClasses}
                    style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
};

export default Landing;

