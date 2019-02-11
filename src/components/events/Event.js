import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';

import EventStyle from "./EventStyle";

export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"khan",class:8,detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"}
        ]
        }
    }
    renderHeader = () => {
        return (
            <View style={EventStyle.subHeader}>
                <Text style={EventStyle.subHeaderTitle}>Create complain</Text>

                <TouchableOpacity  onPress={() => {this.props.navigation.navigate("EventCreate")}}>
               <Text style={{fontSize:24}}> + </Text>
                </TouchableOpacity>
            </View>
        )
    };
    renderItem({ item, index }) {
        return (
            <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItem} onPress={() => this.props.navigation.navigate('EventDetail', { item })}>
                <View style={EventStyle.listItemDetail}>
                    <Text>Name :</Text>
                   <Text >Discribtion</Text> 
                   <Text>date</Text> 
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
