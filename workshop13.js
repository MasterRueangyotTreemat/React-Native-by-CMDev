/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, Button} from 'react-native';



//How to do jesture Ios it is make image click like button
export default class workshop13 extends Component {
  constructor(props){
    super(props)
    this.state = {active: false};
    this.clickMe = this.clickMe.bind(this);
  }

  //Token to True => false and False => true
  clickMe(){
    this.setState(oldState => {
      return {active: !oldState.active}
    })
  }

//background is back we have to change it by using underlayColor="white" or "#FFFFFF"
  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
        <Button title={this.state.active ? "Active" : "InActive"} onPress={this.clickMe} />
      </View>
    );
  }

}
