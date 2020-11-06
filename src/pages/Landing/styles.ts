import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    headerProfileImage: {
        width: 40,
        height: 40,
        marginRight: 16,
        borderRadius: 20,
    },
    headerProfileView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerProfileText: {
        color: '#D4C2FF',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 22,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        fontFamily: 'Archivo-Regular',

    },
    titleBold: {
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonPrimary: {
        backgroundColor: '#9871F5',

    },
    buttonSecondary: {
        backgroundColor: '#04d361',
    },
    buttonText: {
        fontFamily: 'Archivo-Bold',
        color: '#FFF',
        fontSize: 20,
    },
    totalConnections: {
        fontFamily: 'Poppins-Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 150,
        marginTop: 40,
    },
});

export default styles;