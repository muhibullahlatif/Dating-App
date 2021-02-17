import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './styles';

const MenuComponent = (props) => {
    return(
        <View style={Styles.menuContainer}>
            <View style={Styles.menuContainInner}>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={props.onPressHome}
                    style={Styles.innerMenuIcon}>
                    <Image source={props.IconHome} resizeMode="contain" style={Styles.menuIcon} />
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={props.onPressChat}
                    style={Styles.innerMenuIcon}>
                    <Image source={props.IconChat} resizeMode="contain" style={Styles.menuIcon} />
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={props.onPressSettings}
                    style={Styles.innerMenuIcon}>
                    <Image source={props.IconSettings} resizeMode="contain" style={Styles.menuIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MenuComponent;