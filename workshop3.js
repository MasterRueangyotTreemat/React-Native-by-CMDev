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



export default class workshop3 extends Component {
  render(){
    return(
      <View style={styles.container}>
      
      <Text style={styles.item}>Data Team Manager</Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
       flex: 1, flexDirection: 'column',
       backgroundColor: "#FF0000", 
       alignItems : 'center', 
       justifyContent : 'center'
  },
  item: {
    fontSize: 30,
    fontWeight : 'bold',
    color : "#FFFFFF"
  }
});
