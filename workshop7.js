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


export default class workshop7 extends Component {
  render(){
    return(
      <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'space-between', alignItems : 'flex-end'}}>
        <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
        <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
     </View>
    );
  }

}

// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'space-between', alignItems : 'flex-start'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column-reverse', backgroundColor : '#FFFFFF', justifyContent : 'flex-start', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// //center center by justifyContent and alignItems
// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF', justifyContent : 'center', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column', backgroundColor : '#FFFFFF', justifyContent : 'flex-start', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }


// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'column-reverse', backgroundColor : '#FFFFFF', justifyContent : 'flex-start', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

//chitkhua
// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row-reverse', backgroundColor : '#FFFFFF', justifyContent : 'flex-start', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }

// export default class workshop7 extends Component {
//   render(){
//     return(
//       <View style={{flex:1,flexDirection : 'row', backgroundColor : '#FFFFFF', justifyContent : 'flex-start', alignItems : 'center'}}>
//         <View style={{width : 50, height: 50, backgroundColor: 'red'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'pink'}} />
//         <View style={{width : 50, height: 50, backgroundColor: 'blue'}} />
//      </View>
//     );
//   }

// }