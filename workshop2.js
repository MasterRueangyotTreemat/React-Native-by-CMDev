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



export default class workshop2 extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column',
       backgroundColor: "#FF0000", 
       alignItems : 'center', 
       justifyContent : 'center'}}>
      
      <BlinkText message="Welcome to Data Team Manager" interval={100}/>

      </View>
    );
  }

}


class BlinkText extends Component{
  
    constructor(props){
        super(props)
        this.state = {inVisible : true};

        setInterval(() => {
            this.setState(oldState=>{
                return {inVisible : !oldState.inVisible}
            })
        }, this.props.interval);
    }

  render(){
    let display = this.state.inVisible ? this.props.message : '';
    return(
        <Text style={{textAlign: 'center', color: '#FFFFFF'}}>
           {display}
        </Text>
    );
  }
}