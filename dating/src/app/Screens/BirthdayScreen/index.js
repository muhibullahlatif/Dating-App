import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Icons from '../../../assets/Icons';
import Styles from '../BirthdayScreen/style';

const BirthdayScreen = (props) => {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [month1, setMonth1] = useState('');
    const [month2, setMonth2] = useState('');
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
    const [year3, setYear3] = useState('');
    const [year4, setYear4] = useState('');
    return(
        <View style={Styles.MainContainer}>
            <TouchableOpacity 
                style={Styles.backContainer}
                activeOpacity={1}
                onPress={() => props.navigation.goBack()}
                >
                <Image source={Icons.BackIcon} resizeMode="contain" style={{width: 40, height: 40, marginLeft: 5}} />
            </TouchableOpacity>
            <View style={Styles.birthContainer}>
                <Image source={Icons.BirthdayIcon} resizeMode="contain" style={{width: 40, height: 40}} />
                <Text style={Styles.textBirth}>My Birthday is...</Text>
            </View>
            <View style={Styles.codeInputContainer}>
                {/* Date */}
                <TextInput 
                    placeholder="D"
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={date1}
                    onChangeText={(text) => {setDate1(text)}}
                />
                <TextInput 
                    placeholder="D"
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={date2}
                    onChangeText={(text) => {setDate2(text)}}
                />
                {/* Month */}
                <TextInput
                    placeholder="M" 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={month1}
                    onChangeText={(text) => {setMonth1(text)}}
                />
                <TextInput
                    placeholder="M" 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={month2}
                    onChangeText={(text) => {setMonth2(text)}}
                />
                {/* Year */}
                <TextInput
                    placeholder="Y" 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={year1}
                    onChangeText={(text) => {setYear1(text)}}
                />
                <TextInput 
                    placeholder="E"
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={year2}
                    onChangeText={(text) => {setYear2(text)}}
                />
                <TextInput 
                    placeholder="A" 
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={year3}
                    onChangeText={(text) => {setYear3(text)}}
                />
                <TextInput 
                    placeholder="R"
                    maxLength={1}
                    keyboardType={'number-pad'}
                    style={Styles.TextBg}
                    value={year4}
                    onChangeText={(text) => {setYear4(text)}}
                />
            </View>
            <View style={Styles.progressBar}></View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => props.navigation.navigate('GenderSelection')}
                style={Styles.nextBtn}
                >
                    <Image source={Icons.NextBtn} resizeMode="contain" style={{width: 70, height: 70}} />
                </TouchableOpacity>
        </View>
    );
}

export default BirthdayScreen;