<<<<<<< HEAD
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class App extends React.Component {
  state = {
     myState: 'Campus Feels'
  }
  updateState = () =>this.setState({myState: 'The state is updated'})
  render(){
      return (
        <View>
          <Text onPress = {this.updateState} style = {styles.textStyle}>
              {this.state.myState}
              </Text>
        </View>
      );
=======
import React, { Component } from 'react';
import {AppRegistry, Text,Button, StyleSheet, Alert, TextInput, View} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: ''
    }
  }

handleChangeInput = (text) => { this.setState({mood: text })}
  render() {
    return (
      <View style={styles.container}>
        <Text>Campus Feels</Text>
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Mood?"
          onChangeText={this.handleChangeInput}
        />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="SUBMIT"
        />
      </View>
      </View>
    );
>>>>>>> d7951a00fa78896dcbd70a7f85068ef14cb69c19
  }
}

const styles = StyleSheet.create ({
   textStyle: {
     color: 'blue',
     marginTop: 20,
     textAlign : 'center',
     fontSize: 40
   }
});
