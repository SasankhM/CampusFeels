import React, { Component } from 'react';
import {AppRegistry, Text,Button, StyleSheet, Alert, TextInput, View} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    }
  }

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
      this.setState({output: responseJson.probability.pos.toString()})
      Alert.alert(this.state.output);
    })

    .catch((error) => {
      console.error(error);
    });
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Campus Feels</Text>
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="How do you feel this morning?"
          onChangeText={this.handleChangeInput}
        />
        <Button
          onPress={() => {
            this.handleChangeInput
            this.getSentimentAsync(this.state.input);
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
     color: 'blue',
     marginTop: 50,
     alignItems : 'center',
     alignSelf: 'center',
     fontSize: 40
   }
});
