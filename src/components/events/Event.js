import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';

import EventStyle from "./EventStyle";
import firebase from "firebase";
import Swipeable from 'react-native-swipeable';
// complain page wala 
export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            isSwiping: false,
            currentlyOpenSwipeable:null,
        load:true
        }
    }
    handleScroll = () => {
        let { currentlyOpenSwipeable } = this.state;
        if (currentlyOpenSwipeable) {
            currentlyOpenSwipeable.recenter();
        }
    };
    fatch=()=>{
        var array = [];
        firebase.database().ref("/").child("complain").on('child_added', snap => {
          obj = snap.val();
          obj.key = snap.key
          console.log(obj,"obxxx")
          array.push(obj);
          var arr=array.reverse()
        //   array.reverse();
          this.setState({
    
            arr: arr,
            load:false
          })

        })  
    }
    componentWillMount(){
         this.fatch()
    }
    renderHeader = () => {
        return (
            <View style={EventStyle.subHeader}>
                <Text style={EventStyle.subHeaderTitle}>Check complain</Text>

               
            </View>
        )
    };
    deleteCat=(id)=>{
        firebase.database().ref("/").child("complain").child(id).remove().then(()=>{
            alert("Delete Category Successfully")
            this.fatch()
        })
    }
    renderItem({ item, index }) {
        let { currentlyOpenSwipeable,load} = this.state;

        const onOpen = (event, gestureState, swipeable) => {
            if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                currentlyOpenSwipeable.recenter();
            } this.setState({currentlyOpenSwipeable: swipeable});
        };

        const onClose = () => this.setState({currentlyOpenSwipeable: null});

        const rightButtons = [
            <TouchableOpacity style={EventStyle.delbtn} onPress={()=>this.deleteCat(item.key)} >
           <Text style={EventStyle.delbtntxt}>Delete</Text>
            </TouchableOpacity>
        ];

        return (
            
            <Swipeable rightButtons={rightButtons}
            onSwipeStart={() => this.setState({isSwiping: true})}
            onSwipeRelease={() => this.setState({isSwiping: false})}
            onRef = {ref => this.swipeable = ref}
            onRightButtonsOpenRelease = {onOpen} onRightButtonsCloseRelease = {onClose}>
           {  (item.seen)?
            <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItemSeen} onPress={() => this.props.navigation.navigate('EventDetail', { item })}>
                <View style={EventStyle.listItemDetail}>
                    <Text style={{fontSize:17,color:"black"}}>Name :{item.name}</Text>
                   <Text >Phone:{item.phone}</Text> 
                   <Text>Category:{item.category}</Text> 
                   <Text>Date:{item.date}</Text> 
                   <Text>Time:{item.time}</Text> 
                </View>
            </TouchableOpacity>  :
            <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItem} onPress={() => this.props.navigation.navigate('EventDetail', { item })}>
                <View style={EventStyle.listItemDetail}>
                    <Text style={{fontSize:17,color:"black"}}>Name :{item.name}</Text>
                   <Text >Phone:{item.phone}</Text> 
                   <Text>Category:{item.category}</Text> 
                   <Text>Date:{item.date}</Text> 
                   <Text>Time:{item.time}</Text> 
                </View>
            </TouchableOpacity>
                  }
            </Swipeable>
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
