import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
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
        padding: 10,
        borderRadius: 5,
    },
    searchText: {
        color: '#969DA4',
    },
    SearchBoxContainer: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 55,
        marginLeft: 10,
        position: 'absolute',
        width: '100%',
    },
    SearchInnerTextContainer1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#969DA4'
    },
    SearchInnerTextContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchInnerText: {
        marginTop: 10,
        marginLeft: 5,
        paddingBottom: 10,
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
    userContainer: {
        width: '95%',
        height: '87%',
        marginTop: 15,
    },
    userDetails: {
        marginLeft: 15,
        marginTop: '80%',
    },
    userNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ageText: {
        color: '#FFF',
        fontSize: width * 0.085,
        fontWeight: '100',
        fontStyle: 'normal',
        marginLeft: 20,
    },
    userNameText: {
        color: '#FFF',
        fontSize: width * 0.085,
        fontWeight: 'normal',
        marginLeft: 10,
    },
    userCountryText: {
        color: '#FFC912',
        fontSize: width * 0.043,
        fontWeight: 'bold',
        marginLeft: 27,
        textTransform: 'uppercase'
    },
});