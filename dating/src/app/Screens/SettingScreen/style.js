import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#FFECF1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F93E59'
    },
    backContainer: {
        width: '25%'
    },
    middleText: {
        color: '#00195E',
        fontWeight: 'bold',
        fontSize: width * 0.045,
        width: '40%'
    },
    profileImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    profileSty: {
        width: 150,
        height: 150,
        borderRadius: 50,
    },
    formContainer: {
        padding: 10,
        marginTop: 20,
        marginBottom: 20
    },
    fieldContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    fieldName: {
        color: '#969DA4',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 3
    },
    textInputWidth: {
        width: '90%',
        color: '#00195E',
        fontSize: width * 0.040,
        fontWeight: 'bold',
    },
});