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
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    middleText: {
        color: '#969DA4',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    chatContainer: {
        height: 550,
        marginTop: 10,
        padding: 5,
    },
    dateText: {
        textAlign: 'center',
        color: '#969DA4',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    userMsgContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImgContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
    },
    userProfile: {
        width: 60,
        height: 60,
    },
    userMsgContainerSender: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userMsgType: {
        backgroundColor: '#D1EDFF',
        borderRadius: 50,
        padding: 10,
    },
    typeMsg: {
        color: '#00195E',
        fontWeight: '500',
        paddingLeft: 10,
        paddingRight: 10,
    },
    userMsgContainerReceiver: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    userMsgType2: {
        backgroundColor: '#F93E59',
        borderRadius: 50,
        padding: 10,
        marginLeft: 10
    },
    typeMsg2: {
        color: '#FFF',
        fontWeight: '500',
        paddingLeft: 10,
        paddingRight: 10,
    },
    newMsgContainer: {
        backgroundColor: '#ECECEC',
        width: width,
        position: 'absolute',
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        padding: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    msgText: {
        color: '#000',
        width: '70%'
    },
});