import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F7',
    },
    imageBackgroundView: {
        height: 350,
        paddingHorizontal: 64,
        paddingVertical: 45,
        backgroundColor: '#8257E5'

    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        height: undefined,
        width: undefined,
    },
    imageView: {
        width: 120,
        height: 120,
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 96,
    },
    textNumber: {
        fontFamily: 'Archivo-Regular',
        fontSize: 40,
        lineHeight: 43.52,
        color: '#6A6180',
        opacity: 0.16,
    },
    description: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        lineHeight: 34,
        color: '#6A6180',
        maxWidth: 210,
        marginTop: 24,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 96,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 1,
        backgroundColor: '#8257E5',
    },
    dotsView: {
        flexDirection: 'row',
        width: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default styles;