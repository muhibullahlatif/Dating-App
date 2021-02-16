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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
    },
    textBirth: {
        color: '#00195E',
        fontSize: width * 0.085,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
    },
    progressBar: {
        width: '50%',
        height: '1%',
        borderRadius: 10,
        backgroundColor: '#F82E4B',
        marginTop: 30,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#134C9A',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F82E4B',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    GenderIcon: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        padding: 20
    },
    genderText: {
        color: '#FFF',
        marginLeft: 20,
        fontSize: width * 0.045,
        fontWeight: '600',
    }
});