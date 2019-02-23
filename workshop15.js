/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, Image} from 'react-native';



export default class workshop15 extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
        <Image resizeMode="center" style={{width : undefined, height: 100}} source={require('./img/codemobiles_logo.png')}/>
      </View>
    );
  }

}
// *width : undefined or not use width position is not the same
/* The way to show image has three method 
* 1. file bundle 
* 2. refer by URL
* 3. from database
        <Image style={{height : 100, width : undefined,}} resizeMode="center" source={require('./img/codemobiles_logo.png') }/>
  If you want size of image adjust follow Flexbox we have to define "undefined" on width or height

*/

// export default class workshop15 extends Component {
//   constructor(props){
//     super(props)
//   }


//   render() {
//     return (
//       <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'flex-start'}}>
//         <Image resizeMode="center" style={{width : undefined}} source={require('./img/codemobiles_logo.png')}/>
//       </View>
//     );
//   }

// }