import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './styles';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import ButtonComponent from '../../Components/ButtonComponent';
import styles from './styles';

const SignUpScreen = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return(
        <>
        <View style={Styles.MainContainer}>
            <View style={Styles.Logo}>
                <Image source={Images.AppLogo} resizeMode="contain" style={{ width: 100, height: 100 }} />
            </View>
            <View style={Styles.BottomTextContainer}>
                <Text style={Styles.Text1}>Dating.</Text>
                <Text style={Styles.Text2}>Creativity.</Text>
                <Text style={Styles.Text3}>Anonymity.</Text>
            </View>
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
            <ButtonComponent 
                function={true}
                navigation={props.navigation}
                bgColor={'#F82E4B'}
                onPress={() => props.navigation.navigate('Otp')}
                btnTextColor={'#FFF'}
                btnText={'Next'}
            />
            <Text style={Styles.orText}>OR</Text>
            <View style={Styles.SocialContainer}>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={() => {alert("Google Login");}}
                    >
                    <Image source={Icons.GoogleIcon} />
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={() => {alert("facebook Login");}}
                    >
                    <Image source={Icons.FacebookIcon} />
                </TouchableOpacity>
            </View>
            <Text style={Styles.bottomText}>By creating an account or logging in, you agree to our terms and Privacy Policy</Text>
            <View style={Styles.bottomLoginContainer}>
                <Text style={Styles.btmInnerText1}>Already an account ?</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('SignIn')}>
                    <Text style={Styles.btmInnerText2}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

export default SignUpScreen;