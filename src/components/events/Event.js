import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';

import EventStyle from "./EventStyle";
import firebase from "firebase";

export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[
               
        ],
        load:true
        }
    }

    componentWillMount(){
            var array = [];
            firebase.database().ref("/").child("complain").on('child_added', snap => {
              obj = snap.val();
              obj.key = snap.key
              console.log(obj,"obxxx")
              array.push(obj);
              this.setState({
        
                arr: array,
                load:false
              })

            })  
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
                    <Text style={{fontSize:17,color:"black"}}>Name :{item.name}</Text>
                   <Text >Phone:{item.phone}</Text> 
                   <Text>Date:{item.date}</Text> 
                </View>
            </TouchableOpacity>
        )
    };
   
  
    render() {
      let {arr,load}=this.state;
        return (
            <View>
                 { load ? <View style={{flex:1, flexDirection: 'column',justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#f29638" />
        </View> :
                    <FlatList
                        data={arr}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item, index) => { return index.toString() }}
                    />
        }
            </View>
        )
    }
}
