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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import signUpStyle from './signupStyle';

export default class SignUp extends Component<{}> {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange(name, val){
        this.setState({[name]: val})
    }
    adminLogin=()=>{
        
            if(this.state.email!==""&&this.state.password!==""){
            let obj={
              email:this.state.email,
              password:this.state.password,
             
            }
          
            firebase.auth().signInWithEmailAndPassword(obj.email,obj.password)
            .then((suc)=>{
              alert("LogIn success")
                    this.props.navigation.navigate('Event')
            })
            .catch((err)=>{
              alert(err)
            })
          }
          else{
          alert("please fill both field!!!")
            
          
          }

    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/background.jpg')}>
                    <ScrollView>
                <View style={signUpStyle.viewBoxTop} >
                    <Image style={signUpStyle.Logoimage}
                        source={require('../../assets/images/logo.png')} />
                </View>

                <View style={signUpStyle.viewBoxButtom} >
                   <View style={{alignItems: 'center'}}>
                 <View style={signUpStyle.TextInputView}>
                 <TextInput underlineColorAndroid='transparent'
                        style={signUpStyle.TextInputStyle}
                        placeholder="Email"  placeholderTextColor="#b2b2b2" 
                        onChange={this.onChange.bind(this, 'email')}
                        value={this.state.email}
                    />
                   {/* <Ionicons color='gray' size={24} name="ios-mail-outline"/> */}
                 </View>
                 <View style={signUpStyle.TextInputView}>
                    <TextInput underlineColorAndroid='transparent'
                        style={signUpStyle.TextInputStyle}
                        placeholderTextColor="#b2b2b2" 
                        onChange={this.onChange.bind(this, 'password')}
                        placeholder="Password"
                        value={this.state.password}
                        />
                         {/* <Ionicons color='gray' size={24} name="ios-search-outline"/> */}
                        </View>
                
                   
                    <TouchableOpacity  style={signUpStyle.ButtonStyle}>
    
                        <Text style={signUpStyle.ButtonText}>
                           Admin Login
                 </Text>
                    </TouchableOpacity>
                  
                        </View>
                </View>
            </ScrollView>
         </ImageBackground>
            
        );
    }

};

