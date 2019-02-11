import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Platform, ActivityIndicator } from 'react-native';

 import SpeakerDetailStyle from "./SpeakerDetailStyle";

 export default  class SpeakerDetail extends Component {

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
                            <View style={{marginHorizontal:10}}>
                             <Text>SpeakerDetail</Text>
                             <Text>{this.props.navigation.state.params.item.SpeakerName}</Text>
                            </View>
                        </View>
                   </View>
            </View>
        )
    }
}
