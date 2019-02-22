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

//Flexbox
/*
* Frequently use
* Flex : dimention
* FlexDirection : row | comlumn
* 
*/

//Spread full or no gap and it shouldn't define width or height
export default class workshop8 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'space-evenly', alignItems : 'stretch'}}>
        <View style={{width : 50, backgroundColor: 'red'}} />
        <View style={{width : 50, backgroundColor: 'pink'}} />
        <View style={{width : 50, backgroundColor: 'blue'}} />
     </View>
    );
  }

}

//if you want to adjust it into column you have to bring width out and change it into height instead.
// export default class workshop8 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF', justifyContent : 'space-evenly', alignItems : 'stretch'}}>
//         <View style={{height : 50, backgroundColor: 'red'}} />
//         <View style={{height : 50, backgroundColor: 'pink'}} />
//         <View style={{height : 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// //Space evenly every gap is the same size 
// export default class workshop8 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'space-evenly', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// //Spring two side of object or has gap to side
// export default class workshop8 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'space-around', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

//Spring between or has gap one side
// export default class workshop8 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'space-between', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

