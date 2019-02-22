/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableHighlight,Image,TouchableNativeFeedback} from 'react-native';



//How to do jesture Ios it is make image click like button
export default class workshop12 extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''};
  }

  clickMe(){
    Alert.alert("Just Click");
  }

  longClickMe(){
    Alert.alert("Long Click");
  }

  _onPressButton(){
    Alert.alert("You Click OnPressButton");
  }
//background is back we have to change it by using underlayColor="white" or "#FFFFFF"
  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'space-around'}}>
        <TouchableHighlight onPress={this.clickMe} underlayColor="blue" onLongPress={this.longClickMe}>
          <View>
            <Image resizeMode="center"
              source={require('./img/CMDev.jpg')}
              style={{width : 300, height : 70, marginTop : 20,}}
            />
            <Text style={{padding : 10, fontSize : 42}}>Button</Text>
          </View>
        </TouchableHighlight>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>Button</Text>
           </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

}
