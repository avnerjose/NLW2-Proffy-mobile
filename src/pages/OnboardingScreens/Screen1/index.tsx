import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Screen1: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageBackgroundView}>
                <ImageBackground style={styles.imageBackground} resizeMode="contain" source={require('../../../assets/images/onboarding-Background.png')} >
                    <View style={styles.imageView}>
                        <Image style={styles.image} resizeMode="contain" source={require('../../../assets/images/icons/study1.png')} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textNumber}>01.</Text>
                <Text style={styles.description}>Encontre vários professores para ensinar você</Text>

                <View style={styles.footer}>
                    <View style={styles.dotsView}>
                        <View style={styles.dot} />
                        <View style={[styles.dot, { backgroundColor: '#C1BCCC' }]} />
                    </View>
                    <BorderlessButton onPress={() => { navigation.navigate('Screen2') }}>
                        <Image source={require('../../../assets/images/icons/onboarding-next.png')} />
                    </BorderlessButton>
                </View>
            </View>
        </View>
    );
}

export default Screen1;

