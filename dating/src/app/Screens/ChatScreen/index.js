import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, SafeAreaView } from 'react-native';
import Styles from './style';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';

const ChatScreen = (props) => {
    const [message, setmessage] = useState('');
    return(
        <>
            <View style={Styles.HeaderContainer}>
                <TouchableOpacity 
                    style={Styles.backContainer}
                    activeOpacity={1}
                    onPress={() => props.navigation.goBack()}
                    >
                    <Image source={Icons.BackIcon} resizeMode="contain" style={{width: 30, height: 30, marginLeft: 5}} />
                </TouchableOpacity>
                <View style={Styles.MiddleContainer}>
                    <View style={Styles.userContainer}>
                        <Image source={Images.MaleUser} resizeMode="contain" style={{width: 70, height: 60, borderRadius: 10}} />
                        <Image source={Images.FemaleUser} resizeMode="contain" style={{width: 70, height: 60, borderRadius: 10}} />
                    </View>
                    <Text style={Styles.middleText}>You have start conversation</Text>
                </View>
                <TouchableOpacity 
                    style={Styles.backContainer}
                    activeOpacity={1}
                    onPress={() => {alert("asa")}}
                    >
                    <Image source={Icons.More} resizeMode="contain" style={{width: 20, height: 20, marginRight: 10}} />
                </TouchableOpacity>
            </View>
            <SafeAreaView>
            <KeyboardAvoidingView behavior="padding">
                <View style={Styles.chatContainer}>
                    <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                        <Text style={Styles.dateText}>10/12/2021 10:28 PM</Text>
                        <View style={Styles.userMsgContainer}>
                            <Image source={Images.Sender_Voice} resizeMode="contain" />
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                        </View>
                        <View style={Styles.userMsgContainer}>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                            <Image source={Images.Receiver_Voice} resizeMode="contain" />
                        </View>
                        <Text style={Styles.dateText}>Today</Text>
                        {/* Sender */}
                        <View style={Styles.userMsgContainerSender}>
                            <View style={Styles.userMsgType}>
                                <Text style={Styles.typeMsg}>Hi, Whats Up !!!</Text>
                            </View>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                        </View>
                        {/* Receiver */}
                        <View style={Styles.userMsgContainerReceiver}>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                            <View style={Styles.userMsgType2}>
                                <Text style={Styles.typeMsg2}>Hi, I am good !!!</Text>
                            </View>
                        </View>
                        {/* Sender */}
                        <View style={Styles.userMsgContainerSender}>
                            <View style={Styles.userMsgType}>
                                <Text style={Styles.typeMsg}>Hi, Whats Up !!!</Text>
                            </View>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                        </View>
                        {/* Receiver */}
                        <View style={Styles.userMsgContainerReceiver}>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                            <View style={Styles.userMsgType2}>
                                <Text style={Styles.typeMsg2}>Hi, I am good !!!</Text>
                            </View>
                        </View>
                        {/* Sender */}
                        <View style={Styles.userMsgContainerSender}>
                            <View style={Styles.userMsgType}>
                                <Text style={Styles.typeMsg}>Hi, Whats Up !!!</Text>
                            </View>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                        </View>
                        {/* Receiver */}
                        <View style={Styles.userMsgContainerReceiver}>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                            <View style={Styles.userMsgType2}>
                                <Text style={Styles.typeMsg2}>Hi, I am good !!!</Text>
                            </View>
                        </View>
                        {/* Sender */}
                        <View style={Styles.userMsgContainerSender}>
                            <View style={Styles.userMsgType}>
                                <Text style={Styles.typeMsg}>Hi, Whats Up !!!</Text>
                            </View>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.FemaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                        </View>
                        {/* Receiver */}
                        <View style={Styles.userMsgContainerReceiver}>
                            <View style={Styles.profileImgContainer}>
                                <Image source={Images.MaleUser} resizeMode="contain" style={Styles.userProfile} />
                            </View>
                            <View style={Styles.userMsgType2}>
                                <Text style={Styles.typeMsg2}>Hi, I am good !!!</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={Styles.newMsgType}>
                        <View style={Styles.newMsgContainer}>
                            <TextInput
                                placeholder="Type Your Message ..."
                                keyboardType={'default'}
                                style={Styles.msgText}
                                value={message}
                                onChangeText={(msg) => setmessage(msg)} 
                            />
                            <Image source={Icons.NextBtn} resizeMode="contain" style={{width: 60, height: 60}} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}

export default ChatScreen;