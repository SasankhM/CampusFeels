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
