import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import heartOulineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/49520658?s=460&v=4.png' }} />
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Avner José</Text>
                <Text style={styles.subject}>Matemática</Text>
            </View>
            <Text style={styles.bio}>
                jfçlajdfçalkdjfçjaçlksdjfçalkdsjf
                    {'\n'} {'\n'}
                    khadlçkfjaçsdlfjçasdlkjfaçslkdjfaçslkdjfçaskldjfçalkjsçdklfjasçkldfjkçlashfçajsdhfçaklsdhfçasdçflhaç
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20.00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOulineIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;