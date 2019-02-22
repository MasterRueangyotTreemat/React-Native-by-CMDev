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


//Arrange position , Flexbox works like grid system of bootstrap.

//Flexbox
/*
* Frequently use
* Flex : dimention
* FlexDirection : row | comlumn
* 
*/

//center center by justifyContent and alignItems
export default class workshop6 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF', justifyContent : 'center', alignItems : "center"}}>
        <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width : 50, height: 50, backgroundColor: 'white'}} />
        <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
     </View>
    );
  }

}

//Arrange it in prachit center position by justifyContent, keep it in container
// export default class workshop6 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF', justifyContent : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'white'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// export default class workshop6 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'white'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// export default class workshop6 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'white'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }