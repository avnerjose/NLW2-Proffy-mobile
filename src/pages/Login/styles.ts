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
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: '#32264D',
        fontSize: 24,
        lineHeight: 34,
    },
    createAccountText: {
        fontFamily: 'Poppings-Regular',
        fontSize: 12,
        lineHeight: 24,
        color: '#8257E5',
    },
    emailInput: {
        height: 64,
        paddingVertical: 20,
        paddingHorizontal: 24,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#FAFAFC',
    },
    passwordInputView: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#FAFAFC',
        paddingRight: 24,
        margin: 'auto',
    },
    passwordInput: {
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 56,
        backgroundColor: '#F0F0F7',
        margin: 'auto',
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
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
    secondaryButtonText: {
        color: '#9C98A6',
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        lineHeight: 24,
        marginLeft: 12,
    },
    selectButton: {
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E6E6F0'
    },
    selectedSelectButton: {
        backgroundColor: '#04D361',
    },
    selectButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default styles;