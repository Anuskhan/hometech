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
import Icon from 'react-native-vector-icons/Ionicons';
//user loagin
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginStyle from './LoginStyle';

export default class Login extends Component<{}> {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: ""
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
        
    }
login=()=>{
    let { name,phone} = this.state;
    let disable = !(!name && !phone);
    console.log(disable,"name")
    console.log(name,"name")
    console.log(phone,"namPPPe")
    if(disable){
        let item = {
           name,phone
        };
        this.props.navigation.navigate("Dashboard",item) 
     alert("yes")   
    }else{
        alert("yes")   

    }
    
}
    render() {
        let { name,phone} = this.state;
        let disable = !(name && phone);
        // console.log(disable,'ssdsd')
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/background.jpg')}>
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
                             onPress={() => {this.login()}}
                            >
                                <Text style={LoginStyle.buttomText}>
                                    LOG IN
                 </Text>
                            </TouchableOpacity>
                          
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }

};

