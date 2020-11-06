import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
        paddingHorizontal: 32,
        paddingTop: 64,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: '#32264D',
        fontSize: 32,
        lineHeight: 42,
        marginTop: 92,
    },
    sectionTitle: {
        fontFamily: 'Poppins-Bold',
        color: '#32264D',
        fontSize: 24,
        lineHeight: 34,
        marginTop: 148,
        marginBottom: 24,
    },
    subtitle: {
        marginTop: 16,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180',
        maxWidth: 210,
    },
    input: {
        height: 64,
        paddingVertical: 20,
        paddingHorizontal: 24,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        backgroundColor: '#FAFAFC',
        color: '#6A6180',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    mainButton: {
        height: 56,
        backgroundColor: '#8257E5',
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
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backButton: {
        marginTop: 16,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderTopRound: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    borderBottomRound: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
});

export default styles;