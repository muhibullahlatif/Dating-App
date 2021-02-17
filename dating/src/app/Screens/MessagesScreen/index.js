import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styles from './style';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import Header from '../../Components/HeaderComponent';
import Menu from '../../Components/BottomMenuComponent';

const { width, height } = Dimensions.get('window');

const msgData = [
    {
        id: '1',
        image: Images.FemaleUser,
        time: '10',
        description: 'UI techniques is used is really good in this app and color selection is good as well.',
    },
    {
        id: '2',
        image: Images.MaleUser,
        time: '20',
        description: 'UI techniques is used is really good in this app and color selection is good as well.',
    },
    {
        id: '3',
        image: Images.FemaleUser,
        time: '15',
        description: 'UI techniques is used is really good in this app and color selection is good as well.',
    },
    {
        id: '4',
        image: Images.MaleUser,
        time: '30',
        description: 'UI techniques is used is really good in this app and color selection is good as well.',
    },
    {
        id: '5',
        image: Images.FemaleUser,
        time: '15',
        description: 'UI techniques is used is really good in this app and color selection is good as well.',
    },
    {
        id: '6',
        image: Images.MaleUser,
        time: '30',
        description: 'UI techniques is used is really good in this app and color selection is good as well.',
    },
];

const MessageScreen = (props) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.navigation.navigate('Chat')}
            >
            <View style={Styles.MessageBox}>
                <Image source={item.image} resizeMode="contain" style={Styles.userProfile} />
                <View style={Styles.MessageList}>
                    <Text style={Styles.timeMsg}>{item.time} minutes ago</Text>
                    <Text style={Styles.msgText}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
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
                <FlatList
                    contentContainerStyle={{paddingBottom: height * 0.18 }}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false} 
                    data={msgData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Menu 
                IconHome={Icons.UnActiveHome}
                onPressHome={() => props.navigation.navigate('Home')} 
                IconChat={Icons.ActiveChat}
                onPressChat={() => props.navigation.navigate('Message')}
                IconSettings={Icons.UnActiveSettings}
                onPressSettings={() => props.navigation.navigate('Settings')}
            />
        </>
    );
}

export default MessageScreen;