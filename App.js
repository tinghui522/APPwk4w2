import React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import { Image,StyleSheet,TouchableOpacity,View } from 'react-native';

import HomeScreen from './screen/HomeScreen';
import MessageScreen from './screen/MessageScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen 
        name=" " 
        component={HomeScreen}
        options={{ 
          headerStyle: {
            height:0,
          },
          
        }}
        /> 
      
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ 
            title:" ",
            headerStyle: {
              height:0,
              backgroundColor:'#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLeft:{
    marginLeft: 0,
    width: 360,
    height: 50
  },
  headerRight:{
    marginRight: 0,
    width: 54,
    height: 50
  },
});

export default App;