import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, TouchableWithoutFeedback,createStackNavigator, Animation, Easing} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" color={tintColor} size={24} />
      )
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({tintColor}) => (
        <Icon name="map" color={tintColor} size={24} />
    )},
  }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      style: {backgroundColor: '#0d7aef'},
      inactiveTintColor: 'black',
      activeTintColor: '#C9C5C5'
    },
});

// const AppNavigator = createStackNavigator({
//     Home: {
//       screen: HomeScreen,
//     },
//     Map: {
//       screen: MapScreen,
//     },
//     initialRouteName: 'Home',
//   //  headerStyle: {backgroundColor: '#0d7aef'}
// });



export default createAppContainer(AppNavigator);
