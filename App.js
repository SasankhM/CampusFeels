import React, { Component } from 'react';
import {AppRegistry, Text,Button, StyleSheet, Alert, TextInput, View} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

handleChangeInput = (text) => { this.setState({input: text })}

// function getSentimentAsync() {
//   return fetch('http://text-processing.com/api/sentiment/')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

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
            Alert.alert(this.state.input);
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
