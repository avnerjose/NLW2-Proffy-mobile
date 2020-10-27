import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: '#e6e6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#e6e6e6',

    },
    profileInfo: {
        marginLeft: 16,
    },
    name: {
        fontFamily: 'Archivo-Bold',
        color: '#32264d',
        fontSize: 20,
    },
    subject: {
        fontFamily: 'Poppins-Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: "#6a6180",
    },
    footer: {
        backgroundColor: '#Fafafc',
        alignItems: 'center',
        padding: 24,
        marginTop: 24,
    },
    price: {
        fontFamily: 'Poppins-Regular',
        color: '#6a6180',
        fontSize: 14,
    },
    priceValue: {
        fontFamily: 'Archivo-Bold',
        color: '#8257E5',
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    favoriteButton: {
        backgroundColor: '#8257E5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8,
    },
    contactButtonText:{
      color: '#FFF',
      fontFamily: 'Archivo-Bold',
      fontSize: 16,
      marginLeft: 16,  
    },
});

export default styles;