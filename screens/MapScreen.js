import React, { Component } from 'react';
import {AppRegistry, Text, Button, StyleSheet, Alert, TextInput, View, Image, Platform, ScrollView,TouchableOpacity} from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import {NavigationEvents} from 'react-navigation';
import PropTypes from 'prop-types';
import { db } from './src/config.js';

let markersRef = db.ref('/reacts');
export default class MapScreen extends React.Component{
  static navigationOptions = {
   title: 'Map',
 };

 constructor(props) {
   super(props);
   this.state = {
     color: '#800080',
     mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
     locationResult: null,
     location: {coords: { latitude: 37.78825, longitude: -122.4324}},
     markers: []
  }
}

updateMap = () => {
  const hexColor = this.props.navigation.getParam('hexColor', 'No-Value');
  const input = this.props.navigation.getParam('input', 'hello');
  this.setState({ color: hexColor});
  this.setState({ message: input});
  this._getLocationAsync();

  markersRef.on('value', (snap) => {
    var finished = []
    snap.forEach((data) => {
      let result = data.val();
      result["key"] = data.time_stamp;
      finished.push(result);
    })
    this.setState({
    markers: finished
  })
 });
};

addItem = (lat, long, hexColor, message) => {
     db.ref('/reacts').push({
       time_date: Date.now(),
       lat: lat,
       long: long,
       hexColor: hexColor,
       message: message
     });
   };

_getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }
   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
   this.addItem(this.state.location.coords.latitude,
     this.state.location.coords.longitude, this.state.color, this.state.message);
};

render() {
    return(
      <MapView
        style={styles.map}
        region={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
          <NavigationEvents onDidFocus = {this.updateMap}/>
          {this.state.markers.map(x => (
          <MapView.Marker
            key = {`${x.time_date}`}
            title={x.message}
            description={Date(x.time_date).toString()}
            coordinate={{
              latitude: x.lat,
              longitude: x.long
            }}>
            <Image
              source={require('./marker.png')}
              style={{...styles.markers, tintColor: x.hexColor}}
            />
          </MapView.Marker>
            ))
          }
      </MapView>
  )}
}

const styles = StyleSheet.create({
  map: {
  ...StyleSheet.absoluteFillObject,
},
  markers: {
    width: 20,
    height: 20,
    tintColor: 'yellow',
    opacity: 0.6
  }
});
