import React, { Component } from "react";
import { Text, TextInput,FlatList,ActivityIndicator, View,ImageBackground, TouchableOpacity } from 'react-native';
import EventStyle from '../events/EventStyle';
import { TextField } from 'react-native-material-textfield';
import DashboardStyle from '../dashboard/DashboardStyle';
import Swipeable from 'react-native-swipeable';

import firebase from "firebase";
// services RATE Add page

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
         cat:'',
         arr:[],
         isSwiping: false,
         currentlyOpenSwipeable:null,
         load:true,
         title:'',
         detail:'',
         rate:'',
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
   
    firebase.database().ref('serviceRate').on('child_added', snap => {
        obj = snap.val();
        obj.key = snap.key
        array.push(obj);
        this.setState({
          arr: array,
          load:false,
          cat:'',
          title:'',
            rate:'',
            detail:''
        })
      })  
   }



catadd=()=>{
    let {title,rate,detail} = this.state;
    let obj={title,rate,detail}
    firebase.database().ref("/").child("serviceRate").push(obj).then((successf)=>{
        alert("Services Rate set !! ")
        this.setState({
            title:'',
            rate:'',
            detail:''
          })
      }).catch((err)=>{
          alert(err)
        })
    }

   
    render() {
        let {arr,load,title,rate,detail} = this.state;
       
        let disable = !(title && rate && detail);
        return (
            
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/fmbg.jpg')}>
           
            <View>
            <View style={EventCreateStyle.dev}>
                <Text style={EventCreateStyle.heading}>Services Rate</Text>
            </View>
                <View style={EventCreateStyle.textFeildView}>
                        <TextField
                            label='Title'
                            value={title}
                            tintColor = '#ffff'
                        textColor = '#ffff'
                        baseColor = '#ffff'
                            onChangeText={this.onChange.bind(this, 'title')}
                        />
                        <TextField
                            label='Rate'
                            keyboardType="phone-pad"
                            value={rate}
                            tintColor = '#ffff'
                        textColor = '#ffff'
                        baseColor = '#ffff'
                            onChangeText={this.onChange.bind(this, 'rate')}
                        />
                        <TextField
                            label='Detail'
                            value={detail}
                            tintColor = '#ffff'
                        textColor = '#ffff'
                        baseColor = '#ffff'
                            onChangeText={this.onChange.bind(this, 'detail')}
                        />
                </View>
                <TouchableOpacity disabled={disable} onPress={()=>{this.catadd()}} style={DashboardStyle.ButtonStyle}
                            >
                                <Text style={DashboardStyle.buttomText}>
                                  Services Rate Add
                 </Text>
                            </TouchableOpacity>
                    
                

            </View>
           

            </ImageBackground >

        );

    }

}

