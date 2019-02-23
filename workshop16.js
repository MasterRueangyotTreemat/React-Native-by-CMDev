/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Alert, Button} from 'react-native';



//Auto binding
export default class workshop16 extends Component {
  constructor(props){
    super(props)
    this.state = {active: false};
  }

  //Will Error
  clickMe = () => {
    this.setState(oldState => {
      return {active: !oldState.active}
      
    })
  }

  //Work with arrow function
  clickMeWithArrowFn = ()=>{
    this.setState(oldState => {
      return {active: !oldState.active}
    })
  }
  //Work with tail binding
  ClickMeWithBinding(){
    this.setState(oldState => {
      return {active : !oldState.active}
    })
  }
  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
        <Button title={this.state.active ? "Active" : "InActive"} onPress={this.clickMe} /> //Error
        <Button title={this.state.active ? "Active" : "InActive"} onPress={this.clickMeWithArrowFn} /> // Using Arrow Function
        <Button title={this.state.active ? "Active" : "InActive"} onPress={this.ClickMeWithBinding.bind(this)} /> // Using Tailing Binding

      </View>
    );
  }

}

