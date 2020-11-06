import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackgroundView: {
        paddingHorizontal: 56,
        height: 380,
        backgroundColor: '#8257E5',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    imageView: {
        width: 160,
        height: 160,
        position: 'relative',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: '#32264D',
        fontSize: 24,
        lineHeight: 34,
        marginTop: 46,
    },
    subtitle: {
        marginTop: 16,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180'
    },
    emailInput: {
        height: 64,
        paddingVertical: 20,
        paddingHorizontal: 24,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        backgroundColor: '#FAFAFC',
        borderRadius: 8,
        marginTop: 40,
        color: '#6A6180',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 32,
        backgroundColor: '#F0F0F7',
        margin: 'auto',
    },
    mainButton: {
        height: 56,
        backgroundColor: '#04D361',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        borderRadius: 8,
        margin: 'auto',
    },
    mainButtonLabel: {
        fontFamily: 'Archivo-Bold',
        color: '#FFF',
        fontSize: 16,
        lineHeight: 26,
    },
    backButton: {
        marginTop: 16,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    }

});


export default styles;