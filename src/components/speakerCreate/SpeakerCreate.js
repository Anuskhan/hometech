import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import firebase from "firebase";

export default class SpeakerCreate extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
componentWillMount(){    
    firebase.auth().signOut();
    
    this.props.navigation.navigate("Login");
   
    this.props.screenProps.navfun(true);
         

    
  
    }
 

    render() {
        let { } = this.state;
        return (
            <View>
                
            </View>

        );

    }

}