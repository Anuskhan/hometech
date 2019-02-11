
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Platform, ActivityIndicator } from 'react-native';

import EventStyle from "../events/EventStyle";

export default  class Speaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {place:"karachi",SpeakerName:"khan",education:"ms"},
                {place:"karachi",SpeakerName:"wqwerty",education:"ms"},
                {place:"karachi",SpeakerName:"qwert2",education:"ms"},
                {place:"karachi",SpeakerName:"qwerty3",education:"ms"},
                {place:"karachi",SpeakerName:"qwertyu4",education:"ms"},
                {place:"karachi",SpeakerName:"qwerty5",education:"ms"},
                {place:"karachi",SpeakerName:"qwerty6",education:"ms"},
                {place:"karachi",SpeakerName:"qwerty7",education:"ms"},
            ],
           votes:0
        }
    }

    interested=()=>{
    
}
renderHeader = () => {
    return (
        <View style={EventStyle.subHeader}>
            <Text style={EventStyle.subHeaderTitle}>Create Speaker</Text>

            <TouchableOpacity  onPress={() => {this.props.navigation.navigate("SpeakerCreate")}}>
           <Text style={{fontSize:24}}> + </Text>
            </TouchableOpacity>
        </View>
    )
};
renderItem({ item, index }) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItem} onPress={() => this.props.navigation.navigate('SpeakerDetail', { item })}>
            
            <View style={EventStyle.listItemDetail}>
                <Text style={{fontSize:17,color:"black"}}>Speaker :</Text>
               <Text >Speaker detail</Text> 
               <Text>{item.education}</Text> 
            </View>
        </TouchableOpacity>
    )
};
    render() {
      let {arr}=this.state;
        return (
            <View>
               <FlatList
                        data={arr}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item, index) => { return index.toString() }}
                    />
 
            </View>
        )
    }
}
