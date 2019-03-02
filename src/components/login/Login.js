import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Button,
    ImageBackground
} from 'react-native';
//user loagin
import LoginStyle from './LoginStyle';
import firebase from "firebase";
import moment from "moment";
export default class Login extends Component<{}> {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: "",
            obj:""
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
    }
    componentWillMount(){
 
        let { params } = this.props.navigation.state;
      
        if (params) {
          console.log(params,"params")
          this.setState({
            // name: params.name,
            // phone: params.phone,
            obj: params,

           
          })
          console.log(this.state.name,"item")
        }

    }
            submit =()=>{
            let { name,phone,obj} = this.state;
            let date=moment().format(" Do MMM YY");
            let time=moment().format('hh:mm A');
            const get={name,phone,date,time};
            const data = Object.assign(obj, get);
        
            firebase.database().ref("/").child("complain").push(data).then((successf)=>{
                alert("Your order has been placed ")
                this.setState({
                    name:'',
                    phone:'',

                })
            }).catch((err)=>{
                alert(err)
                })
            
        }
   

  
    

    render() {
        let { name,phone} = this.state;
        let disable = !(name && phone);
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/test.jpeg')}>
                <ScrollView>
                    <View style={LoginStyle.viewBoxTop} >
                        <Image style={LoginStyle.Logoimage}
                            source={require('../../assets/images/logo.png')} />
                        
                    </View>
                    <View style={LoginStyle.viewBoxButtom} >
                        <View style={{ alignItems: 'center' }}>
                            <View style={LoginStyle.TextInputView}>
                                <TextInput underlineColorAndroid='transparent'
                                    style={LoginStyle.TextInputStyle}
                                    placeholder="Name" placeholderTextColor="#b2b2b2"
                                    onChangeText={this.onChange.bind(this, 'name')}
                                    value={name}
                                />
                            </View>
                            <View style={LoginStyle.TextInputView}>
                                <TextInput underlineColorAndroid='transparent'
                                    style={LoginStyle.TextInputStyle}
                                    keyboardType="phone-pad"
                                    maxLength={11}
                                    placeholderTextColor="#b2b2b2"
                                    onChangeText={this.onChange.bind(this, 'phone')}
                                    placeholder="Phone number"
                                    value={phone}
                                />
                            </View>
                            
                            <TouchableOpacity   disabled={disable} style={LoginStyle.ButtonStyle}
                             onPress={() => {this.submit()}}
                            >
                                <Text style={LoginStyle.buttomText}>
                                   ORDER
                 </Text>
                            </TouchableOpacity>
                          
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }

};

