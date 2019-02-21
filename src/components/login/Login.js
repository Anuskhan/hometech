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

    if(disable){
        let item = {
           name,phone
        };
        this.props.navigation.navigate("Dashboard",item) 
     
    }else{

    }
    
}
    render() {
        let { name,phone} = this.state;
        let disable = !(name && phone);
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

