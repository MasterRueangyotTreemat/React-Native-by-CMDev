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



export default class workshop4 extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <Text style={styles.myText}>Hello</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
       flex: 1, 
       flexDirection: 'column',
       backgroundColor: "#FFFFFF", 
       alignItems : 'flex-start',
       justifyContent : 'flex-start'
  },
  myText : {
    width : 300,
    height : 300,
    backgroundColor : "#D0D0D0"
  },
  item: {
    fontSize: 30,
    fontWeight : 'bold',
    color : "#FFFFFF"
  }
});
