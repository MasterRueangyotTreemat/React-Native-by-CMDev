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
 import {Platform, StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native'
 
 export class workshop19 extends Component {
  renderListHeader(){
    return(
      <View>
        <Image style={{width : undefined, height : 90, resizeMode : "contain", marginTop : 40}} source={require('./img/Header_codemobiles.png')}/>
      </View>
    )
  }


   render() {
     return (
       <View >
         <ImageBackground style={{width : '100%', height : '100%'}} source={require('./img/bgb.jpg')}>
          <FlatList data={([1,2,3,4,5,6,7,8])}
            ListHeaderComponent={this.renderListHeader}
            renderItem={({item}) => <Text>{item}</Text>}/>
         </ImageBackground>
        </View>
     )
   }
 }
 
 export default workshop19
 