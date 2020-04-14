import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import headerData from "../json/header.json";


const MessageScreen = ({navigation}) => {
    return(
        
 <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={{uri: headerData.MessagePage.HeaderLeftUrl}}style={styles.headerLeft}/>
                </TouchableOpacity>
                <Image source={{uri: headerData.MessagePage.HeaderRightUrl}} style={styles.headerRight}/>               
            </View>
            <ScrollView>
            <View  style={{marginTop:-20}}>
                <Image
                    source={{uri: "https://github.com/tinghui522/APPwk4w2/blob/master/img/message/msg_list.png?raw=true"}} 
                    style={styles.mesList}
                />
            </View>
            </ScrollView>
            
            <View style={{marginTop:0}}>
                <Image  source={{uri: headerData.MessagePage.bottomImage}} style={styles.bottom}/>
            </View>
        </View>
        
       
    );
};
const styles = StyleSheet.create({
    headerRight:{
        marginTop:15,
        width: 380,
        height: 45
      },
      headerLeft:{
        marginTop:30,
        marginRight: 0,
        marginLeft:20,
        width: 30,
        height: 20
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
        height: 50
      },
    mesList:{
        marginTop:10,
        width:414,
        height:729,
        marginLeft:0
        
    },
});
export default MessageScreen;