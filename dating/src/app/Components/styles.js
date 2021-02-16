import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
 
export default StyleSheet.create({
    // Button CSS
    BtnMainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    TextContainer: {
        fontSize: width * 0.045,
    },
    // Input Text CSS
    inputContainer: {
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
    },
    // Header CSS
    Header: {
        backgroundColor: '#FFECF1',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        width: 60,
        height: 60,
        marginTop: 10,
        marginBottom: 10
    },
    // Menu CSS
    menuContainer: {
        backgroundColor: '#F8F8F8',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuContainInner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
});