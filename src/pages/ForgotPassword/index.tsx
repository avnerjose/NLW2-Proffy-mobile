import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


const ForgotPassword: React.FC = () => {


    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView enableOnAndroid={true} style={{ flex: 1 }}>

            <View style={styles.imageBackgroundView}>
                <ImageBackground
                    style={styles.imageBackground}
                    resizeMode="contain"
                    source={require('../../assets/images/onboarding-Background.png')}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={require('../../assets/images/Intro.png')} />
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.safeArea}>

                <BorderlessButton
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Image source={require('../../assets/images/icons/back.png')} />
                </BorderlessButton>

                <Text style={styles.title}>Esqueceu sua senha?</Text>
                <Text style={styles.subtitle}>Não esquenta, {'\n'}vamos dar um jeito nisso!</Text>

                <TextInput
                    style={styles.emailInput}
                    placeholder={"E-mail"}
                    placeholderTextColor="#9C98A6"
                    value={email}
                    onChangeText={text => setEmail(text)} />

                <RectButton
                    onPress={() => navigation.navigate('Conclusion', {
                        title: 'Redefinição Enviada!',
                        subtitle: 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos',
                        label: 'Voltar ao Login',
                    })}
                    enabled={!!email}
                    style={[styles.mainButton, !email ? { backgroundColor: '#DCDCE5' } : {}]}>
                    <Text style={[styles.mainButtonLabel, !email ? { color: "#9C98A6" } : {}]}>Enviar</Text>
                </RectButton>

            </View>

        </KeyboardAwareScrollView>
    )
}

export default ForgotPassword;

