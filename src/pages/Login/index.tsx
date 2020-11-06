import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const Login: React.FC = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [remenberMe, setRemenberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

                <View style={styles.titleView}>
                    <Text style={styles.title}>Fazer login</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register1')}>
                        <Text style={styles.createAccountText}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.emailInput}
                    placeholder={"E-mail"}
                    placeholderTextColor="#9C98A6"
                    value={email}
                    onChangeText={text => setEmail(text)} />

                <View style={styles.passwordInputView}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder={"Senha"}
                        placeholderTextColor="#9C98A6"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <BorderlessButton onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Icon size={24} name={passwordVisible ? "visibility-off" : "visibility"} color={passwordVisible ? "#8257E5" : "#9C98A6"} />
                    </BorderlessButton>
                </View>

                <View style={styles.buttonsView}>
                    <View style={styles.selectButtonView}>
                        <RectButton
                            onPress={() => setRemenberMe(!remenberMe)}
                            style={[styles.selectButton, remenberMe ? styles.selectedSelectButton : {}]} >
                            {remenberMe && <Icon name="done" color="#FFF" size={12} />}
                        </RectButton>
                        <Text style={styles.secondaryButtonText}>Lembrar-me</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.secondaryButtonText}>Esqueci minha sennha</Text>
                    </TouchableOpacity>
                </View>

                <RectButton
                    onPress={() => navigation.navigate('Landing')}
                    enabled={!(!password || !email)}
                    style={[styles.mainButton, (!password || !email) ? { backgroundColor: '#DCDCE5' } : {}]}>
                    <Text style={[styles.mainButtonLabel, !email ? { color: "#9C98A6" } : {}]}>Entrar</Text>
                </RectButton>

            </View>

        </KeyboardAwareScrollView>
    )
}

export default Login;

