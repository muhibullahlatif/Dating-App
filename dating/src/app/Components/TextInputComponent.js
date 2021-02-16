import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Styles from './styles';

const CustomTextInput = (props) => {
    const [isPass, setPass] = useState(true);

    return(
        <View style={Styles.inputContainer}>
            <TextInput 
                placeholder= {props.Label}
                keyboardType= {props.keyboardType}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.IsPass ? isPass : false}
                autoFocus={props.autoFocus}
            />
        </View>
    );
}

export default CustomTextInput;