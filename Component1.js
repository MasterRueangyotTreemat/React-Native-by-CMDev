/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



export default class Component1 extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column',
       backgroundColor: "#FF0000", 
       alignItems : 'center', 
       justifyContent : 'center'}}>
      
      <MyText message="Welcome To Data Team Manager by Noom" option="1234"></MyText>

      </View>
    );
  }

}


class MyText extends Component{
    
  constructor(props){
    super(props)
}
  render(){
    return(
        <Text style={{textAlign: 'center', color: '#FFFFFF'}}>
           {this.props.message}, {this.props.option} 
        </Text>
    );
  }
}