import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { TextField } from 'react-native-material-textfield';
import firebase from "firebase";

export default class SpeakerCreate extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
componentWillMount(){
    let nav=this.props.navigation;
    let src=this.props.screenProps;
    this.props.screenProps.navfun(true);

      firebase.auth().signOut().then(()=>{

        nav.navigate("Login") ;
         src.navfun(true);
         

      })
  
    }
 

    render() {
        let { } = this.state;
        return (
            <View>
                
            </View>

        );

    }

}