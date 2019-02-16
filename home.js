import React, { Component } from 'react';
import {AppRegistry, Text,Button, StyleSheet, Alert, TextInput, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
        output: ''
      }
  }

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
                      this.getSentimentAsync(this.state.input);
                      }}
                      title = "SUBMIT"
                      color = "black"
                  />
              </View>
       </View>
    );
  }

  handleChangeInput = (text) => { this.setState({input: text })}

  async getSentimentAsync(text) {
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
     opacity: 0.3
   },
   textStyle: {
     borderWidth: 2,
     paddingHorizontal: 20,
     paddingVertical: 5,
     borderColor: 'black'
   },
   buttonContainer: {
     marginTop: 10,
     opacity: 0.5
   }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
