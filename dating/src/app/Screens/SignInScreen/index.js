import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Styles from './styles';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import ButtonComponent from '../../Components/ButtonComponent';
import InputComponent from '../../Components/TextInputComponent';

const SignInScreen = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <>
        <View style={Styles.MainContainer}>
            <View style={Styles.Logo}>
                <Image source={Images.AppLogo} resizeMode="contain" style={{ width: 100, height: 100 }} />
            </View>
            <View style={Styles.BottomTextContainer}>
                <Text style={Styles.Text1}>Welcome Back</Text>
            </View>
            <View style={Styles.loginFormContainer}>
                <View style={Styles.PhoneContainer}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {alert("Country Select");}}>
                        <View style={Styles.countryContainer}>
                            <Image style={Styles.countryFlag} source={Icons.CountryFlag} />
                            <Text style={Styles.countryCode}>+1</Text>
                            <Image style={Styles.dropdownIcon} source={Icons.DropDownIcon} />
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.NumberInputContainer}>
                        <TextInput
                            placeholder="Enter Phone Number"
                            keyboardType={'number-pad'}
                            value={phoneNumber}
                            onChangeText={(number) => {setPhoneNumber(number)}} />
                    </View>
                </View>
                <Text style={Styles.orText}>OR</Text>
                <InputComponent 
                    Label= "Enter Email Address"
                    keyboardType= {'email-address'}
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => {setEmail(text)}}
                />
                <InputComponent 
                    Label= "Enter Password"
                    keyboardType= {'default'}
                    value={password}
                    onChangeText={(text) => {setPassword(text)}}
                    IsPass={true}
                />
            </View>
            <ButtonComponent 
                function={true}
                navigation={props.navigation}
                bgColor={'#F82E4B'}
                onPress={() => props.navigation.navigate('Home')}
                btnTextColor={'#FFF'}
                btnText={'Sign In'}
            />
            <View style={Styles.bottomLoginContainer}>
                <Text style={Styles.btmInnerText1}>Don't have an account ?</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={Styles.btmInnerText2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

export default SignInScreen;