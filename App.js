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

<<<<<<< HEAD
=======
handleChangeInput = (text) => { this.setState({input: text })}
async getSentimentAsync(text) {
  // var form = new FormData();
  // form.append("text", text);
  fetch("http://text-processing.com/api/sentiment/", {
     method: "POST",
     body: "text=" + text,
     headers: {
         "Content-Type": "application/x-www-form-urlencoded"
     }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({output: responseJson.label})
      Alert.alert(this.state.output);
    })
>>>>>>> 43671fff827f7f01b53fbc956ec0cc8331365102


export default createAppContainer(AppNavigator);
