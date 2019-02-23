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



export default class workshop17 extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
        <Image resizeMode="center" style={{width : undefined, height: 100}} source={require('./img/codemobiles_logo.png')}/>
        <Image resizeMode="center" style={{height : 100, width : undefined}} source={{uri : "https://1.bp.blogspot.com/-enhlHkU13LU/W4GfwwFSXrI/AAAAAAAADHw/nLtytfr-68gkb72EZCGSeZzRfX-seA-bwCLcBGAs/s1600/Feng-Timo-%25E9%25A6%25AE%25E6%258F%2590%25E8%258E%25AB-Learn-To-Love-%25E9%2582%258A%25E8%25B5%25B0%25E9%2582%258A%25E6%2584%259B.jpg"}}/> 
        <Image resizeMode="contain" style={{height : 100, width : undefined}} source={{uri : "https://1.bp.blogspot.com/-enhlHkU13LU/W4GfwwFSXrI/AAAAAAAADHw/nLtytfr-68gkb72EZCGSeZzRfX-seA-bwCLcBGAs/s1600/Feng-Timo-%25E9%25A6%25AE%25E6%258F%2590%25E8%258E%25AB-Learn-To-Love-%25E9%2582%258A%25E8%25B5%25B0%25E9%2582%258A%25E6%2584%259B.jpg"}}/> 
        <Image resizeMode="cover" style={{height : 100, width : undefined}} source={{uri : "https://1.bp.blogspot.com/-enhlHkU13LU/W4GfwwFSXrI/AAAAAAAADHw/nLtytfr-68gkb72EZCGSeZzRfX-seA-bwCLcBGAs/s1600/Feng-Timo-%25E9%25A6%25AE%25E6%258F%2590%25E8%258E%25AB-Learn-To-Love-%25E9%2582%258A%25E8%25B5%25B0%25E9%2582%258A%25E6%2584%259B.jpg"}}/> 
        <Image resizeMode="repeat" style={{height : 100, width : undefined}} source={{uri : "https://1.bp.blogspot.com/-enhlHkU13LU/W4GfwwFSXrI/AAAAAAAADHw/nLtytfr-68gkb72EZCGSeZzRfX-seA-bwCLcBGAs/s1600/Feng-Timo-%25E9%25A6%25AE%25E6%258F%2590%25E8%258E%25AB-Learn-To-Love-%25E9%2582%258A%25E8%25B5%25B0%25E9%2582%258A%25E6%2584%259B.jpg"}}/> 
        <Image resizeMode="stretch" style={{height : 300, width : undefined}} source={{uri : "https://1.bp.blogspot.com/-enhlHkU13LU/W4GfwwFSXrI/AAAAAAAADHw/nLtytfr-68gkb72EZCGSeZzRfX-seA-bwCLcBGAs/s1600/Feng-Timo-%25E9%25A6%25AE%25E6%258F%2590%25E8%258E%25AB-Learn-To-Love-%25E9%2582%258A%25E8%25B5%25B0%25E9%2582%258A%25E6%2584%259B.jpg"}}/> 

      </View>
    );
  }

}
// *width : undefined or not use width position is not the same
/* The way to show image has three method 
* 1. file bundle         <Image style={{height : 100, width : undefined,}} resizeMode="center" source={require('./img/codemobiles_logo.png') }/>
* 2. refer by URL
    The image that you have to show you have to make sure that you pass permission of android and it have set allow also
    if it is iOS you have to go to ios > you project name > info.plist and then
          in <dict> set this <key> NSAllowArbitraryLoads</key> 
          </true>
          and then reload it new by type react-native run-android
* 3. from database
  If you want size of image adjust follow Flexbox we have to define "undefined" on width or height

  resizeMode="center" make photo in center
  resizeMode="contain" make photo to concise image suite for frame
*/

// export default class workshop15 extends Component {
//   constructor(props){
//     super(props)
//   }


//   render() {
//     return (
//       <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
//         <Image resizeMode="center" style={{width : undefined, height: 100}} source={require('./img/codemobiles_logo.png')}/>
//         <Image source={{uri : "https://1.bp.blogspot.com/-enhlHkU13LU/W4GfwwFSXrI/AAAAAAAADHw/nLtytfr-68gkb72EZCGSeZzRfX-seA-bwCLcBGAs/s1600/Feng-Timo-%25E9%25A6%25AE%25E6%258F%2590%25E8%258E%25AB-Learn-To-Love-%25E9%2582%258A%25E8%25B5%25B0%25E9%2582%258A%25E6%2584%259B.jpg"}}/> 
//       </View>
//     );
//   }

// }