    import React, { Component } from 'react';
    import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';
    
    import EventStyle from "../events/EventStyle";
    import rateStyle from "./SpeakerStyle";
    import firebase from "firebase";
    import Swipeable from 'react-native-swipeable';
    /// service rate list 
    export default class Speaker extends Component {
    
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
        componentWillMount(){
                var array = [];
                firebase.database().ref("/").child("serviceRate").on('child_added', snap => {
                  obj = snap.val();
                  obj.key = snap.key;
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
                    <Text style={EventStyle.subHeaderTitle}>Services Rate </Text>
    
                    <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Home")}}>
                   <Text style={{fontSize:24}}> + </Text>
                    </TouchableOpacity>
                </View>
            )
        };
        deleteCat=(id)=>{
            firebase.database().ref("/").child("serviceRate").child(id).remove().then(()=>{
                alert("Delete Successfully")
                this.props.navigation.navigate("Speaker")
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
                </TouchableOpacity>,
                <TouchableOpacity style={EventStyle.delbtn} onPress={() => this.props.navigation.navigate('servRate', { item })}>
               <Text style={EventStyle.delbtnEdit}>Edit</Text>
                </TouchableOpacity>
            ];
    
            return (
                
                <Swipeable rightButtons={rightButtons}
                onSwipeStart={() => this.setState({isSwiping: true})}
                onSwipeRelease={() => this.setState({isSwiping: false})}
                onRef = {ref => this.swipeable = ref}
                onRightButtonsOpenRelease = {onOpen} onRightButtonsCloseRelease = {onClose}>
                 
                <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItem} >
                    <View style={EventStyle.listItemDetail}>
                        <Text style={{fontSize:17,color:"black"}}>Title :{item.title}</Text>
                       <Text >Rate:{item.rate}</Text> 
                       <Text>Detail:{item.detail}</Text> 
                    </View>
                </TouchableOpacity>
                      
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
    