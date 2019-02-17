import React, { Component } from 'react';
import {AppRegistry, Text,Button, StyleSheet, Alert, TextInput, View} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
        hexColor: '',
      }
  }

  static navigationOptions = {
   title: 'Home',
 };

  render() {
    return (
      <View style={styles.container}>
              <View style = {styles.textBoxContainer}></View>
              <View style = {{position: 'relative'}}>
                  <TextInput
                      style={styles.textStyle}
                      placeholder = "How are you feeling, right now?"
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

  handleChangeInput = (text) => {this.setState({input: text })}

  async getSentimentAsync(text) {
      fetch("https://rocky-refuge-35601.herokuapp.com", {
         method: "POST",
         body: text,
         headers: {
             "Content-Type": "application/json"
         }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({hexColor: responseJson.text})
          this.props.navigation.navigate('Map', {input: this.state.input, hexColor: this.state.hexColor});
        })
        .then()
        .catch((error) => {
          console.error(error);
        });
    }
  }

const styles = StyleSheet.create ({
   container: {
     flex: 1,
     backgroundColor: '#ef820d',
     justifyContent: 'center',
     alignItems: 'center'
   },
   textBoxContainer: {
     height : '20%',
     width: '70%',
     position: 'absolute',
     backgroundColor: '#0d7aef',
     borderRadius : 15,
     opacity: 0.8
   },
   textStyle: {
     borderWidth: 2,
     paddingHorizontal: 20,
     paddingVertical: 5,
     color: 'white',
     borderColor: 'black'
   },
   buttonContainer: {
     marginTop: 10,
     opacity: 0.5
   }
});
