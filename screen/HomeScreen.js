import React from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import HomeDetail from "./HomeDetail";
import postData from "../json/post.json";
import headerData from "../json/header.json";


const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <Image source={{uri: headerData.HomePage.HeaderLeftUrl}} style={styles.headerleft}/>
                <TouchableOpacity
                    onPress={() => navigation.push('MessageScreen')}>
                    <Image source={{uri: headerData.HomePage.HeaderRightUrl}} style={styles.headerright}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={postData.postList}
            renderItem={({item}) => 
            <HomeDetail
                post={item}
                navigation={navigation}
                />}
            />
            <View>
                <Image  source={{uri: headerData.HomePage.bottomImage}} style={styles.bottom}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerleft:{
        marginTop:10,
        marginBottom:10,
        marginLeft: 0,
        width: 360,
        height: 50
      },
    headerright:{
    marginTop:10,
    marginBottom:10,
    marginLeft: 0,
    width: 54,
    height: 50
        },
      headerContentStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:414,
        height:60,
        backgroundColor:'#fafafa',
        marginTop:25,
        elevation:4
    },
    bottom:{
        width: 414,
        height: 60,
      }
});
export default HomeScreen;