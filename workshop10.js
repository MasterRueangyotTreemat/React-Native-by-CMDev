/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

//Flexbox
/*
* Frequently use
* Flex : dimention
* FlexDirection : row | comlumn
* 
*/


//Type whatever you type it will type follow you
export default class workshop10 extends Component {
  
  constructor(props){
    super(props)
    this.state = {text: ''};
  }

  clickMe(){
    Alert.alert("Thanks");
  }

  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
        <Button title="Press Me" onPress={this.clickMe}/>
        <Button title="Press Me" onPress={this.clickMe}/>
        <Button title="Press Me" onPress={this.clickMe}/>
      </View>
    );
  }

}
