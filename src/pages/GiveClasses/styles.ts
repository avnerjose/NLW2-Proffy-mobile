import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },
    content:{
        flex:1,
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'Archivo-Bold',
        color:'#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },
    description:{
        marginTop: 26,
        color:'#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins-Regular',
        maxWidth: 240,
    },
    okButton:{
        marginVertical: 40,
        height: 58,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#04d361',
        borderRadius: 8,
    },
    okButtonText:{
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo-Bold',
    }
});

export default styles;