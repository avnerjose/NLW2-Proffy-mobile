import React, { useState } from 'react';
import { View, Text, Image, TextInput, StatusBar, StyleSheet } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const RegisterScreen1: React.FC = () => {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const navigation = useNavigation();

    let enabled = (!!name && !!lastname);

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
                        <View style={styles.dot} />
                        <View style={[styles.dot, { backgroundColor: '#C1BCCC' }]} />
                    </View>

                </View>

                <Text style={styles.title}>Crie sua{'\n'}conta gratuíta</Text>

                <Text style={styles.subtitle}>Basta preencher esses dados e você estará conosco.</Text>

                <Text style={styles.sectionTitle}>01. Quem é você?</Text>

                <TextInput
                    style={[styles.input, styles.borderTopRound]}
                    placeholder="Nome"
                    placeholderTextColor="#9C98A6"
                    value={name}
                    onChangeText={text => setName(text)} />

                <TextInput
                    style={[styles.input, styles.borderBottomRound]}
                    placeholder="Sobrenome"
                    placeholderTextColor="#9C98A6"
                    value={lastname}
                    onChangeText={text => setLastname(text)} />

                <RectButton
                    enabled={enabled}
                    onPress={() => navigation.navigate('Register2')}
                    style={[styles.mainButton, enabled ? {} : { backgroundColor: '#DCDCE5' }]}>
                    <Text style={[styles.mainButtonLabel, enabled ? {} : { color: "#9C98A6" }]}>
                        Próximo
                    </Text>
                </RectButton>

            </KeyboardAwareScrollView>
        </>
    )
}

export default RegisterScreen1;

