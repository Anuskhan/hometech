import React, { Component } from "react";
import { Text, TextInput,FlatList,ActivityIndicator, View,ImageBackground, TouchableOpacity } from 'react-native';
import EventCreateStyle from './EventCreateStyle';
import EventStyle from '../events/EventStyle';
import { TextField } from 'react-native-material-textfield';
import DashboardStyle from '../dashboard/DashboardStyle';
import Swipeable from 'react-native-swipeable';

import firebase from "firebase";
// Category add Add page

export default class EventCreate extends Component {
    constructor() {
        super();
        this.state = {
         cat:'',
         arr:[],
         isSwiping: false,
         currentlyOpenSwipeable:null,
         load:true
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
    }
    handleScroll = () => {
        let { currentlyOpenSwipeable } = this.state;
        if (currentlyOpenSwipeable) {
            currentlyOpenSwipeable.recenter();
        }
    };


   componentWillMount(){
    var array = [];
   
    firebase.database().ref('category').on('child_added', snap => {
        obj = snap.val();
        obj.key = snap.key
        array.push(obj);
        this.setState({
          arr: array,
          load:false,
          cat:''
        })
      })  
   }



catadd=()=>{
    let category=this.state.cat;
    let obj={category}
    firebase.database().ref("/").child("category").push(obj).then((successf)=>{
        alert("Added category ")
        this.setState({
            category:''
          })
      }).catch((err)=>{
          alert(err)
        })
    }
deleteCat=(id)=>{
    firebase.database().ref("/").child("category").child(id).remove().then(()=>{
        alert("Delete Category Successfully")
    })
}
    renderItem({item, index}){

        let { currentlyOpenSwipeable} = this.state;

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
                      <View style={{marginHorizontal:10}} >     
                <TouchableOpacity style={EventStyle.listItem}  activeOpacity={0.5} >
                <View style={EventStyle.listItemDetail}>
                 <Text  style={{fontSize:17,color:"white",fontWeight: 'bold'}}>Category name : {item.category}</Text>
             </View>
                </TouchableOpacity>
                </View>
            </Swipeable>
        )
    };
    render() {
        let {cat,arr,load} = this.state;
        console.log(cat,"cat")
        let disable = !(cat);
        return (
            
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/fmbg.jpg')}>
           
            <View>
            <View style={EventCreateStyle.dev}>
                <Text style={EventCreateStyle.heading}>Category Add</Text>
            </View>
                <View style={EventCreateStyle.textFeildView}>
                        <TextField
                            label='category'
                            value={cat}
                            tintColor = '#ffff'
                        textColor = '#ffff'
                        baseColor = '#ffff'
                            onChangeText={this.onChange.bind(this, 'cat')}
                        />
                </View>
                <TouchableOpacity disabled={disable} onPress={()=>{this.catadd()}} style={DashboardStyle.ButtonStyle}
                            >
                                <Text style={DashboardStyle.buttomText}>
                                  Category Add
                 </Text>
                            </TouchableOpacity>
                    
                

            </View>
            {load ? <ActivityIndicator size="large" color="#f29638" /> :
            <FlatList
                        data={arr}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item, index) => { return index.toString() }}
                    />
                }

            </ImageBackground >

        );

    }

}

