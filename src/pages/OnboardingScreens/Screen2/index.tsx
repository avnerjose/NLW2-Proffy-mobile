import React, { useContext } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';
import { AuthContext } from '../../../contexts/Authprovider';

const Screen2: React.FC = () => {

    const { setOnboarding } = useContext(AuthContext);

    async function handleSetOnboarding() {
        await setOnboarding(true);
    }
    
    return (
        <>
            <StatusBar backgroundColor="#04D361" />
            <View style={styles.container}>
                <View style={styles.imageBackgroundView}>
                    <ImageBackground style={styles.imageBackground} resizeMode="contain" source={require('../../../assets/images/onboarding-Background-Green.png')} >
                        <View style={styles.imageView}>
                            <Image style={styles.image} resizeMode="contain" source={require('../../../assets/images/icons/give-classes1.png')} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textNumber}>02.</Text>
                    <Text style={styles.description}>Ou dê aulas sobre o que você mais conhece</Text>

                    <View style={styles.footer}>
                        <View style={styles.dotsView}>
                            <View style={[styles.dot, { backgroundColor: '#C1BCCC' }]} />
                            <View style={styles.dot} />
                        </View>
                        <BorderlessButton onPress={handleSetOnboarding}>
                            <Image source={require('../../../assets/images/icons/onboarding-next.png')} />
                        </BorderlessButton>
                    </View>
                </View>
            </View>
        </>
    );
}

export default Screen2;

