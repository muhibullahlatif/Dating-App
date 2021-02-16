import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        width: width,
        height: height,
        padding: 10,
    },
    SearchContainer: {
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        borderRadius: 8
    },
    searchInput: {
        marginLeft: 10,
        width: '90%'
    },
    HeadingText: {
        color: '#00195E',
        textAlign: 'left',
        fontSize: width * 0.075,
        marginTop: 1,
        marginBottom: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    MessageBox: {
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 12,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
    },
    userProfile: {
        width: 60, 
        height: 60,
        borderRadius: 20
    },
    MessageList: {
        width: '80%'
    },
    timeMsg: {
        color: '#F93E59',
        fontWeight: 'bold'
    },
    msgText: {
        color: '#00195E',
        fontWeight: '700',
    },
});