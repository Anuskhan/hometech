import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { TextField } from 'react-native-material-textfield';

export default class SpeakerCreate extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
    }
 

    render() {
        let { } = this.state;
        return (
            <View>
                
                <Text>speakercreate</Text>
            </View>

        );

    }

}