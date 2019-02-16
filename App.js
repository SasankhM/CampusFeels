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
  }
}

const styles = StyleSheet.create ({
   container: {
     justifyContent : 'center',
     alignItems: 'center'
     //color: 'blue',
     //marginTop: 20,
     //textAlign : 'center',
     //fontSize: 40
   }
});
