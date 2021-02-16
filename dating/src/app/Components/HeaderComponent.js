import React from 'react';
import { View, Image } from 'react-native';
import Styles from './styles';

const HeaderComponent = (props) => {
    return(
        <View style={Styles.Header}>
            <Image style={Styles.Logo} source={props.MiddleImage} resizeMode="contain" />
        </View>
    );
}

export default HeaderComponent;