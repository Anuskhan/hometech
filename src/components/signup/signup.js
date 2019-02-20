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
import firebase from "firebase";

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
componentWillMount(){
    let nav=this.props.navigation;
    let src=this.props.screenProps;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            nav.navigate("Events") 
            src.navfun(false)
        } else {
            // No user is signed in.
        }
    });
}
    onChange(name, val){
        this.setState({[name]: val})
    }
    adminLogin=()=>{
        
            let obj={
              email:this.state.email,
              password:this.state.password,
             
            }
          
            firebase.auth().signInWithEmailAndPassword(obj.email,obj.password)
            .then((suc)=>{
              alert("LogIn success")
              this.props.screenProps.navfun(false)
              this.props.navigation.navigate("Events") 
            // this.props.navigation.navigate('Events')
            })
            .catch((err)=>{
              alert(err)
            })
          
         

    }

    render() {
        let { password,email} = this.state;
        let disable = !(password && email);
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
                        onChangeText={this.onChange.bind(this, 'email')}
                        value={email}
                    />
                   {/* <Ionicons color='gray' size={24} name="ios-mail-outline"/> */}
                 </View>
                 <View style={signUpStyle.TextInputView}>
                    <TextInput underlineColorAndroid='transparent'
                        style={signUpStyle.TextInputStyle}
                        secureTextEntry={true} 
                        placeholderTextColor="#b2b2b2" 
                        onChangeText={this.onChange.bind(this, 'password')}
                        placeholder="Password"
                        value={password}
                        />
                         {/* <Ionicons color='gray' size={24} name="ios-search-outline"/> */}
                        </View>
                
                   
                    <TouchableOpacity  disabled={disable}  style={signUpStyle.ButtonStyle} onPress={() => {this.adminLogin()}}>
    
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

