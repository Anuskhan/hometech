import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Platform, ActivityIndicator } from 'react-native';

 import EventDetailStyle from "./EventDetailStyle";

 export default class EventDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

   componentWillMount(){
    console.log(this.props.navigation.state.params,"detail");
   }
    render() {
        return (
            <View>
                   <View style={{marginTop:30}}>
                   <View >
                            <View>
                             <Text>EventDetail</Text>
                            </View>
                        </View>
                   </View>
            </View>
        )
    }
}
