import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Styles from './style';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import Menu from '../../Components/BottomMenuComponent';
import ButtonComponent from '../../Components/ButtonComponent';

const SettingScreen = (props) => {
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    return(
        <>
            <View style={Styles.HeaderContainer}>
                <TouchableOpacity 
                    style={Styles.backContainer}
                    activeOpacity={1}
                    onPress={() => props.navigation.goBack()}
                    >
                    <Image source={Icons.BackIcon} resizeMode="contain" style={{width: 30, height: 30, marginLeft: 5}} />
                </TouchableOpacity>
                <Text style={Styles.middleText}>Settings</Text>
                <View style={Styles.rightContainer}></View>
            </View>
            <View style={Styles.profileImg}>
                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.profileSty} />
            </View>
            <View style={Styles.formContainer}>
                <View style={Styles.fieldContainer}>
                    <Text style={Styles.fieldName}>Full Name</Text>
                    <TextInput 
                        placeholder="Enter Full Name"
                        keyboardType="default"
                        style={Styles.textInputWidth}
                        value={fullName}
                        onChangeText={(name) => setFullName(name)}
                    />
                </View>
                <View style={Styles.fieldContainer}>
                    <Text style={Styles.fieldName}>Email Address</Text>
                    <TextInput 
                        placeholder="Enter Email Address"
                        keyboardType="email-address"
                        style={Styles.textInputWidth}
                        value={emailAddress}
                        onChangeText={(email) => setEmailAddress(email)}
                    />
                </View>
                <View style={Styles.fieldContainer}>
                    <Text style={Styles.fieldName}>Phone Number</Text>
                    <TextInput 
                        placeholder="Enter Phone Number"
                        keyboardType="number-pad"
                        style={Styles.textInputWidth}
                        value={phoneNumber}
                        onChangeText={(number) => setPhoneNumber(number)}
                    />
                </View>
                <View style={Styles.fieldContainer}>
                    <Text style={Styles.fieldName}>Password</Text>
                    <TextInput 
                        placeholder="Enter New Password"
                        keyboardType="default"
                        secureTextEntry={true}
                        style={Styles.textInputWidth}
                        value={password}
                        onChangeText={(pass) => setPassword(pass)}
                    />
                </View>
                <ButtonComponent 
                    function={true}
                    navigation={props.navigation}
                    bgColor={'#F82E4B'}
                    onPress={() => props.navigation.navigate('Home')}
                    btnTextColor={'#FFF'}
                    btnText={'Save Changes'}
                />
            </View>
            <Menu 
                IconHome={Icons.UnActiveHome}
                onPressHome={() => props.navigation.navigate('Home')} 
                IconChat={Icons.UnActiveChat}
                onPressChat={() => props.navigation.navigate('Message')}
                IconSettings={Icons.ActiveSettings}
                onPressSettings={() => props.navigation.navigate('Settings')}
            />
        </>
    );
}

export default SettingScreen;