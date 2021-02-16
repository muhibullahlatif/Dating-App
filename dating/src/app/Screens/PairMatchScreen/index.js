import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Styles from './style';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import ButtonComponent from '../../Components/ButtonComponent';

const PairMatchScreen = (props) => {
    return(
        <View style={Styles.MainContainer}>
            <View style={Styles.Logo}>
                <Image source={Images.AppLogo} resizeMode="contain" style={{ width: 80, height: 80 }} />
            </View>
            <Text style={Styles.HeadingText}>It's a Pair!</Text>
            <Text style={Styles.subHeadingText}>You have pair with each other.</Text>
            <View style={Styles.pairContainer}>
                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userImage} />
                <Image source={Images.AppLogo} resizeMode="contain" style={{ width: 40, height: 40, marginTop: 10, marginBottom: 10 }} />
                <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userImage} />
            </View>
            <View style={{marginTop: -70}}>
                <ButtonComponent 
                    function={true}
                    navigation={props.navigation}
                    bgColor={'#F82E4B'}
                    onPress={() => props.navigation.navigate('Message')}
                    btnTextColor={'#FFF'}
                    btnText={'Send a Message'}
                />
            </View>
        </View>
    );
}

export default PairMatchScreen;