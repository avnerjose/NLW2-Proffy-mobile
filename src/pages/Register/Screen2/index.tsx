import React, { useState } from 'react';
import { View, Text, Image, TextInput, StatusBar, StyleSheet } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const RegisterScreen2: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    let enabled = (!!email && !!password);

    return (
        <>
            <StatusBar backgroundColor="#F0F0F7" />
            <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>

                <View style={styles.headerView}>

                    <BorderlessButton
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}>
                        <Image source={require('../../../assets/images/icons/back.png')} />
                    </BorderlessButton>

                    <View style={styles.dotsView}>
                        <View style={[styles.dot, { backgroundColor: '#C1BCCC' }]} />
                        <View style={styles.dot} />
                    </View>

                </View>

                <Text style={styles.title}>Crie sua{'\n'}conta gratuíta</Text>

                <Text style={styles.subtitle}>Basta preencher esses dados e você estará conosco.</Text>

                <Text style={styles.sectionTitle}>02. Email e Senha</Text>

                <TextInput
                    style={[styles.input, styles.borderTopRound]}
                    placeholder="E-mail"
                    placeholderTextColor="#9C98A6"
                    value={email}
                    onChangeText={text => setEmail(text)} />

                <View style={[styles.passwordInputView, styles.borderBottomRound]}>
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

                <RectButton
                    enabled={enabled}
                    onPress={() => navigation.navigate('Conclusion', {
                        title: 'Cadastro Concluído!',
                        subtitle: 'Agora você faz parte da plataforma Proffy',
                        label: 'Fazer login'
                    })}
                    style={[styles.mainButton, enabled ? {} : { backgroundColor: '#DCDCE5' }]}>
                    <Text style={[styles.mainButtonLabel, enabled ? {} : { color: "#9C98A6" }]}>
                        Próximo
                    </Text>
                </RectButton>

            </KeyboardAwareScrollView>
        </>
    )
}

export default RegisterScreen2;

