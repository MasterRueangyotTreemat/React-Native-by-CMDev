/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


//typing "rnce" to create component

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, FlatList, Image, ImageBackground} from 'react-native'

export class workshop21 extends Component {
  renderListHeader() {
    return (
      <View>
        <Image style={{ width: undefined, height: 90, resizeMode: "contain", marginTop: 40, marginBottom : 40 }} source={require('./img/Header_codemobiles.png')} />
      </View>
    )
  }

  renderItem(item) {
    const {cardStyle, avatar, titleSubtileStyle} = styles;
    return (
      <View style={cardStyle}>
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <Image source={require('./img/CMDev.jpg')} style={avatar} />

          <View style={titleSubtileStyle}>
            <Text style={{ color : "#000000EE"}}>Feng timo</Text>
            <Text style={{ color : "#000000AA"}}>1,000,000,000 views</Text>
          </View>
        </View>
        <Image source={require('./img/fengtimo.jpg')} style={{ width: '100%', height: 200 }} />
      </View>
    )
  }

  render() {
    return (
      <View >
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./img/bgb.jpg')}>
          <FlatList style={{ paddingLeft: 28, paddingRight: 28 }}
            data={([1, 2, 3, 4, 5])}
            ListHeaderComponent={this.renderListHeader}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create(
  {
    cardStyle : {flex: 1, 
      flexDirection: 'column', 
      backgroundColor: 'white', 
      marginBottom : 20 ,
      borderRadius : 5
    },
    avatar : {
      width: 45, 
      height: 45, 
      borderRadius: (45 / 2)
      },
    titleSubtileStyle : {
      flexDirection: 'column', 
      marginLeft: 16
    }
  }
)
export default workshop21



// export class workshop21 extends Component {
//   renderListHeader() {
//     return (
//       <View>
//         <Image style={{ width: undefined, height: 90, resizeMode: "contain", marginTop: 40, marginBottom : 40 }} source={require('./img/Header_codemobiles.png')} />
//       </View>
//     )
//   }

//   renderItem(item) {
//     return (
//       <View style={styles.cardStyle}>
//         <View style={{ flexDirection: 'row', margin: 16 }}>
//           <Image source={require('./img/CMDev.jpg')} style={styles.avatar} />

//           <View style={{ flexDirection: 'column', marginLeft: 16 }}>
//             <Text style={{ color : "#000000EE"}}>Feng timo</Text>
//             <Text style={{ color : "#000000AA"}}>1,000,000,000 views</Text>
//           </View>
//         </View>
//         <Image source={require('./img/fengtimo.jpg')} style={{ width: '100%', height: 200 }} />
//       </View>
//     )
//   }

//   render() {
//     return (
//       <View >
//         <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./img/bgb.jpg')}>
//           <FlatList style={{ paddingLeft: 28, paddingRight: 28 }}
//             data={([1, 2, 3, 4, 5])}
//             ListHeaderComponent={this.renderListHeader}
//             renderItem={({ item }) => this.renderItem(item)} />
//         </ImageBackground>
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create(
//   {
//     cardStyle : {flex: 1, 
//       flexDirection: 'column', 
//       backgroundColor: 'white', 
//       marginBottom : 20 ,
//       borderRadius : 5
//     },
//     avatar : {
//       width: 45, 
//       height: 45, 
//       borderRadius: (45 / 2)
//       }
//   }
// )
// export default workshop21
