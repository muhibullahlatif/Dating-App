import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from './styles';

const CustomButton = (props) => {
    return(
        <TouchableOpacity 
            style={[Styles.BtnMainContainer,{backgroundColor: props.bgColor}]}
            activeOpacity={1}
            onPress={
                props.function
                ? props.onPress
                : props.onPress == 'goBack'
                ? props.navigation.goBack()
                : props.navigation.navigate(props.onPress)
            }
            >
                <Text style={[Styles.TextContainer, {color: props.btnTextColor}]}>{props.btnText}</Text>
            </TouchableOpacity>
    );
}

export default CustomButton;