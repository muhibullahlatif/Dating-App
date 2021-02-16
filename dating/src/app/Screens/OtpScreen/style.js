import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFECF1',
        padding: 10
    },
    otpImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    codeText: {
        color: '#969DA4',
        fontSize: width * 0.037,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 12,
    },
    numberText: {
        color: '#00195E',
        fontSize: width * 0.075,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
    },
    codeInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    TextBg: {
        width: 45,
        borderRadius: 5,
        backgroundColor: '#FFF',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: '#00195E',
        fontSize: width * 0.052
    },
});