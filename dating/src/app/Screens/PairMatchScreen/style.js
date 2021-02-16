import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        backgroundColor: '#FFE1EA',
        width: width,
        height: height,
        padding: 10
    },
    Logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
        textAlign: 'center'
    },
    subHeadingText: {
        textAlign: 'center',
        fontSize: width * 0.038,
        color: '#F82E4B'
    },
    pairContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImage: {
        width: '30%',
        height: '30%',
        borderRadius: 10,
    }
});