import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFECF1',
        padding: 10
    },
    birthContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    textBirth: {
        color: '#00195E',
        fontSize: width * 0.085,
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
    progressBar: {
        width: '30%',
        height: '1%',
        borderRadius: 10,
        backgroundColor: '#F82E4B',
        marginTop: 30,
    },
    nextBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});