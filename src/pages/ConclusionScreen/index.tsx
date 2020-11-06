import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Image, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/AppStack';
import styles from './styles';

type ConclusionScreenRouteProp = RouteProp<RootStackParamList, 'Conclusion'>;

interface ConclusionScreenProps {
    route: ConclusionScreenRouteProp,
}

const ConclusionScreen: React.FC<ConclusionScreenProps> = ({ route }) => {

    const navigation = useNavigation();

    const { label, subtitle, title } = route.params;

    return (
        <>
            <StatusBar backgroundColor="#8257E5" />
            <View style={styles.container}>
                <ImageBackground style={styles.imagemBackground} source={require('../../assets/images/conclusion-background.png')}>
                    <Image source={require('../../assets/images/icons/done.png')} />

                    <Text style={styles.title}>{title}</Text>

                    <Text style={styles.subtitle}>{subtitle}</Text>

                </ImageBackground>

                <RectButton
                    onPress={() => navigation.navigate('Login')}
                    style={styles.mainButton}>
                    <Text style={styles.mainButtonLabel}>{label}</Text>
                </RectButton>

            </View>
        </>
    )
}

export default ConclusionScreen;

