import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Styles from './style';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import Header from '../../Components/HeaderComponent';
import Menu from '../../Components/BottomMenuComponent';

const MessageScreen = (props) => {
    return(
        <>
            <Header MiddleImage={Images.AppLogo} />
            <View style={Styles.MainContainer}>
                <View style={Styles.SearchContainer}>
                    <View style={Styles.searchInput}>
                        <TextInput 
                            placeholder="Search here..."
                            keyboardType="default"
                        />
                    </View>
                    <Image source={Icons.Search} resizeMode="contain" style={{width: 20, height: 20, marginRight: 10}} />
                </View>
                <Text style={Styles.HeadingText}>Messages...</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('Chat')}
                    >
                    <View style={Styles.MessageBox}>
                        <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                        <View style={Styles.MessageList}>
                            <Text style={Styles.timeMsg}>2 minutes ago</Text>
                            <Text style={Styles.msgText}>UI techniques is used is really good in this app and color selection is good as well.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('Chat')}
                    >
                    <View style={Styles.MessageBox}>
                        <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                        <View style={Styles.MessageList}>
                            <Text style={Styles.timeMsg}>10 minutes ago</Text>
                            <Text style={Styles.msgText}>UI techniques is used is really good in this app and color selection is good as well.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('Chat')}
                    >
                    <View style={Styles.MessageBox}>
                        <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                        <View style={Styles.MessageList}>
                            <Text style={Styles.timeMsg}>15 minutes ago</Text>
                            <Text style={Styles.msgText}>UI techniques is used is really good in this app and color selection is good as well.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('Chat')}
                    >
                    <View style={Styles.MessageBox}>
                        <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                        <View style={Styles.MessageList}>
                            <Text style={Styles.timeMsg}>20 minutes ago</Text>
                            <Text style={Styles.msgText}>UI techniques is used is really good in this app and color selection is good as well.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <Menu 
                IconHome={Icons.UnActiveHome}
                onPressHome={() => props.navigation.navigate('Home')} 
                IconChat={Icons.ActiveChat}
                onPressChat={() => props.navigation.navigate('Message')}
                IconSettings={Icons.UnActiveSettings}
                onPressSettings={() => props.navigation.navigate('Home')}
            />
        </>
    );
}

export default MessageScreen;