import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground, SafeAreaView } from 'react-native';
import Styles from './style';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import Header from '../../Components/HeaderComponent';
import Menu from '../../Components/BottomMenuComponent';

const usersData = [
    {
        id: '1',
        image: Images.PoolFemaleUSer,
        age: '19',
        userName: 'Melissa',
        userCity: 'New york, NY',
    },
    {
        id: '2',
        image: Images.PoolFemaleUSer,
        age: '23',
        userName: 'Cataline',
        userCity: 'Canada, Quebec',
    },
];

const HomeScreen = (props) => {
    const [showSearch, setShowSearch] = useState(false);
    const [relation, setRelation] = useState('');

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    }
    const serious = () => {
        setRelation('Serious');
        setShowSearch(false);
    }
    const casual = () => {
        setRelation('Casual');
        setShowSearch(false);
    }
    // const renderItem = ({ item }) => (
    //     <TouchableOpacity
    //         activeOpacity={1}
    //         onPress={() => props.navigation.navigate('PairMatch')}
    //         >
    //         <ImageBackground source={item.image} style={Styles.userContainer}>
    //             <View style={Styles.userDetails}>
    //                 <Text style={Styles.ageText}>{item.age}</Text>
    //                 <View style={Styles.userNameContainer}>
    //                     <Image source={Icons.NamePoint} resizeMode="contain" />
    //                     <Text style={Styles.userNameText}>{item.userName}</Text>
    //                 </View>
    //                 <Text style={Styles.userCountryText}>{item.userCity}</Text>
    //             </View>
    //         </ImageBackground>
    //     </TouchableOpacity>
    // );
    return(
        <>
            <Header MiddleImage={Images.AppLogo} />
            <View style={Styles.MainContainer}>
                <TouchableOpacity
                    style={Styles.SearchContainer}
                    activeOpacity={1}
                    onPress={() => toggleSearch()}>
                    <Text style={Styles.searchText}>Select Relationship</Text>
                    <Image source={Icons.DropDownIcon} resizeMode="contain" style={{width: 20, height: 20}} />
                </TouchableOpacity>
                {showSearch ? 
                    <View style={Styles.SearchBoxContainer}>
                        <TouchableOpacity 
                            activeOpacity={1}
                            onPress={() => casual()}
                            style={Styles.SearchInnerTextContainer1}>
                            <Image source={Images.AppLogo} resizeMode="contain" style={{width: 20, height: 20}} />
                            <Text style={Styles.searchInnerText}>Casual Relationship</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={1}
                            onPress={() => serious()}
                            style={Styles.SearchInnerTextContainer2}>
                            <Image source={Images.AppLogo} resizeMode="contain" style={{width: 20, height: 20}} />
                            <Text style={Styles.searchInnerText}>Serious Relationship</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
                <Text style={Styles.HeadingText}>{relation} Relationship People Pool...</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('PairMatch')}
                    >
                    <ImageBackground source={Images.PoolFemaleUSer} style={Styles.userContainer}>
                        <View style={Styles.userDetails}>
                            <Text style={Styles.ageText}>19</Text>
                            <View style={Styles.userNameContainer}>
                                <Image source={Icons.NamePoint} resizeMode="contain" />
                                <Text style={Styles.userNameText}>Melissa</Text>
                            </View>
                            <Text style={Styles.userCountryText}>New York, NY</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                {/* <FlatList
                    showsHorizontalScrollIndicator={true}
                    scrollEnabled={true}
                    data={usersData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> */}
            </View>
            <Menu 
                IconHome={Icons.ActiveHome}
                onPressHome={() => props.navigation.navigate('Home')} 
                IconChat={Icons.UnActiveChat}
                onPressChat={() => props.navigation.navigate('Message')}
                IconSettings={Icons.UnActiveSettings}
                onPressSettings={() => props.navigation.navigate('Settings')}
            />
        </>
    );
}

export default HomeScreen;