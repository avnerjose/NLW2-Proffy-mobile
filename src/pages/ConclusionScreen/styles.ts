import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        paddingHorizontal: 38,
        paddingVertical: 64,
    },
    imagemBackground: {
        flex: 1,
        height: 555,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Archivo-Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 182,
        textAlign: 'center',
        marginTop: 34,
    },
    subtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#D4C2FF',
        textAlign: 'center',
        maxWidth: 280,
        marginTop: 16,
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
});


export default styles; 