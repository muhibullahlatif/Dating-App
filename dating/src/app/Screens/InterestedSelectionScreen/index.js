import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Icons from '../../../assets/Icons';
import Styles from '../InterestedSelectionScreen/style';

const InterestSelectionScreen = (props) => {
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
                <Text style={Styles.textBirth}>I am interested in...</Text>
            </View>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => props.navigation.navigate('Home')}
                style={Styles.boxContainer}
                >
                <View style={Styles.GenderIcon}>
                    <Image source={Icons.MaleIcon} resizeMode="contain" style={{width: 25, height: 25}} />
                </View>
                <Text style={Styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => props.navigation.navigate('Home')}
                style={Styles.boxContainer2}
                >
                <View style={Styles.GenderIcon}>
                    <Image source={Icons.FemaleIcon} resizeMode="contain" style={{width: 25, height: 25}} />
                </View>
                <Text style={Styles.genderText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => props.navigation.navigate('Home')}
                style={Styles.boxContainer3}
                >
                <View style={Styles.GenderIcon}>
                    <Image source={Icons.AllIcon} resizeMode="contain" style={{width: 25, height: 25}} />
                </View>
                <Text style={Styles.genderText}>All</Text>
            </TouchableOpacity>
            <View style={Styles.progressBar}></View>
        </View>
    );
}

export default InterestSelectionScreen;