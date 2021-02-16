import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        backgroundColor: '#FFECF1',
        width: width,
        height: height,
        padding: 15,
    },
    Logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    BottomTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text1: {
        color: '#F82E4B',
        fontSize: width * 0.13,
    },
    Text2: {
        color: '#00195E',
        fontSize: width * 0.13,
    },
    Text3: {
        color: '#F82E4B',
        fontSize: width * 0.13,
    },
    PhoneContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    countryContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#D1D1D1'
    },
    countryFlag: {
        width: 40,
        height: 40,
    },
    countryCode: {
        color: '#969DA4',
        fontSize: width * 0.04,
        marginLeft: 5,
    },
    dropdownIcon: {
        width: 15,
        height: 15,
        marginLeft: 5,
        marginRight: 5
    },
    NumberInputContainer: {
        marginLeft: 15,
        width: '70%'
    },
    orText: {
        textAlign: 'center',
        color: '#969DA4',
        marginTop: 20,
    },
    SocialContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        color: '#616161',
        textAlign: 'center'
    },
    bottomLoginContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    btmInnerText1: {
        color: '#616161'
    },
    btmInnerText2: {
        color: '#F82E4B',
        marginLeft: 5,
        fontWeight: 'bold'
    },
});