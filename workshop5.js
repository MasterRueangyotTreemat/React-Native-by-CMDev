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


//Adjust by ratio 0.1, 0.9
export default class workshop5 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF'}}>
        <View style={{flex : 0.1, backgroundColor: 'red'}} />
        <View style={{flex : 0.8, backgroundColor: 'white'}} />
        <View style={{flex : 0.1, backgroundColor: 'blue'}} />
     </View>
    );
  }

}

//flexDirection : 'column' //vertical
//flexDirection : 'row' //horizontal


/*Thai Flag
export default class workshop5 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'column'}}>
        <View style={{flex : 0.25, backgroundColor: 'red'}} />
        <View style={{flex : 0.25, backgroundColor: 'white'}} />
        <View style={{flex : 0.25, backgroundColor: 'blue'}} />
        <View style={{flex : 0.25, backgroundColor: 'white'}} />
        <View style={{flex : 0.25, backgroundColor: 'red'}} />

     </View>
    );
  }

}
*/

/*
export default class workshop5 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF'}}>
        <View style={{flex : 2, backgroundColor: 'red'}} />
        <View style={{flex : 1, backgroundColor: 'white'}} />
        <View style={{flex : 1, backgroundColor: 'blue'}} />
     </View>
    );
  }

}
*/

/*//This is the same size
export default class workshop5 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF'}}>
        <View style={{flex : 1, backgroundColor: 'red'}} />
        <View style={{flex : 1, backgroundColor: 'white'}} />
        <View style={{flex : 1, backgroundColor: 'blue'}} />
     </View>
    );
  }

}
*/