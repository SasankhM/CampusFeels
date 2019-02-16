import React, { Component } from 'react';
import {AppRegistry, Text,Button, StyleSheet, Alert, TextInput, View} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    state = {
      mood: ''
    }
  }

handleChangeInput = (text) => { this.setState({mood: text })}
  render() {
    return (
      <View style={styles.container}>
              <View style = {styles.textBoxContainer}></View>
              <View style = {{position: 'relative'}}>
                  <TextInput
                      style={styles.textStyle}
                      placeholder = "How do you feel this morning?"
                      onChangeText = {this.handleChangeInput}
                  />
              </View>
              <View style = {styles.buttonContainer}>
                  <Button
                      style = {styles.buttonStyle}
                      onPress={() => {
                      this.handleChangeInput
                      Alert.alert(this.state.mood);
                      }}
                      title = "SUBMIT"
                      color = "black"
                  />
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
     flex: 1,
     backgroundColor: 'grey',
     justifyContent: 'center',
     alignItems: 'center'
   },
   textBoxContainer: {
     height : '20%',
     width: '70%',
     position: 'absolute',
     backgroundColor: 'black',
     borderRadius : 15,
     opacity: 0.5
   },
   textStyle: {
     borderWidth: 2,
     paddingHorizontal: 20,
     paddingVertical: 5,
     borderColor: 'black'
   },
   buttonContainer: {
     marginTop: 10
   }
});
