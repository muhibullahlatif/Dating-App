import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Icons from '../../../assets/Icons';
import Styles from '../OtpScreen/style';
import ButtonComponent from '../../Components/ButtonComponent';

const OTPScreen = (props) => {
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [otp5, setOtp5] = useState('');
    const [otp6, setOtp6] = useState('');
    return(
        <View style={Styles.MainContainer}>
            <TouchableOpacity 
                style={Styles.backContainer}
                activeOpacity={1}
                onPress={() => props.navigation.goBack()}
                >
                <Image source={Icons.BackIcon} resizeMode="contain" style={{width: 40, height: 40, marginLeft: 5}} />
            </TouchableOpacity>
            <View style={Styles.otpImage}>
                <Image source={Icons.OtpIcon} resizeMode="contain" style={{width: 40, height: 40}} />
            </View>
            <Text style={Styles.codeText}>Enter Your Code</Text>
            <Text style={Styles.numberText}>+ 1 232 2323 121</Text>
            <View style={Styles.codeInputContainer}>
                <TextInput 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={otp1}
                    onChangeText={(text) => {setOtp1(text)}}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={otp2}
                    onChangeText={(text) => {setOtp2(text)}}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={otp3}
                    onChangeText={(text) => {setOtp3(text)}}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={otp4}
                    onChangeText={(text) => {setOtp4(text)}}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={otp5}
                    onChangeText={(text) => {setOtp5(text)}}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={otp6}
                    onChangeText={(text) => {setOtp6(text)}}
                />
            </View>
            <ButtonComponent 
                function={true}
                navigation={props.navigation}
                bgColor={'#F82E4B'}
                onPress={() => props.navigation.navigate('Birthday')}
                btnTextColor={'#FFF'}
                btnText={'Send SMS Again'}
            />
        </View>
    );
}

export default OTPScreen;