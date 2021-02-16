import React from 'react';
import { SafeAreaView, Image, ActivityIndicator } from 'react-native';
import Images from '../../../assets/Images/';
import Styles from '../SplashScreen/style';

const SplashScreen = (props) => {
    setTimeout(() => {
        props.navigation.navigate('SignUp');
    }, 3000);
    return(
        <>
        <SafeAreaView>
            <Image 
                resizeMode="contain" 
                source={Images.SplashImage} 
                style={Styles.MainContainer} 
            />
            <ActivityIndicator style={Styles.loader} color="#F82E4B" size="large" />
        </SafeAreaView>
        </>
    );
}

export default SplashScreen;