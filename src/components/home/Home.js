import React, { Component } from 'react';
// var PushNotification = require('react-native-push-notification');
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Button,
    ImageBackground
} from 'react-native';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
          new : ""
        }
    }

    onChange(name, val){
        this.setState({[name]: val})
        console.log(this.state.new)
    }

    componentDidMount(){
        
        // PushNotification.localNotificationSchedule({
        //     //... You can use all the options from localNotifications
        //     vibrate: true, // (optional) default: true
        //     vibration: 1000, 
        //     message: "Its time to change your self", // (required)
        //     date: new Date(Date.now()+6000) // in 60 secs
        //   });
    }
  
    render() {
        return (
          
                <View >
                    <Text >
                        Home
                    </Text>
                    <TextInput value={this.state.new}  onChange={this.onChange.bind(this, 'new')}/>
                </View>
            
            
        );
    }

};

