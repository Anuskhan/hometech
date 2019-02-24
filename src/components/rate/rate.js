import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';

import EventStyle from "../events/EventStyle";
import rateStyle from "../speaker/SpeakerStyle";
import firebase from "firebase";
/// service rate list 
export default class Rate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            
        load:true
        }
    }
 
    componentWillMount(){
            var array = [];
            firebase.database().ref("/").child("serviceRate").on('child_added', snap => {
              obj = snap.val();
              obj.key = snap.key
              array.push(obj);
              array.reverse();
              this.setState({
        
                arr: array,
                load:false
              })

            })  
    }
    renderHeader = () => {
        return (
            <View style={EventStyle.subHeader}>
                <Text style={EventStyle.title}>Services Rate </Text>

            </View>
        )
    };
   
    renderItem({ item, index }) {
     

        return (
            
           
             
            <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItem} >
                <View style={EventStyle.listItemDetail}>
                    <Text style={{fontSize:18,color:"black",fontWeight:'bold'}}>Service Name : {item.title}</Text>
                    <Text style={{fontSize:17,color:"black"}}>Rate : {item.rate} RS</Text>
                    <Text style={{fontSize:17,color:"black"}}>Detail : {item.detail}</Text>
             
                </View>
            </TouchableOpacity>
           
        )
    };
   
  
    render() {
      let {arr,load}=this.state;
        return (
            <View>
     { load ? <View style={{flex:1, flexDirection: 'column',marginTop:"50%" ,justifyContent: 'center'}}>
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
