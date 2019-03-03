import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import DrawerItemsComponentStyle from './DrawerItemsComponentStyle';
import { NavigationActions } from 'react-navigation';
export default class DrawerItemsComponent extends Component<{}> {
    navigationScreenFunction = (nextRouteName) => {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: nextRouteName })]
        }))
    }

    render() {
        console.log(this.props.screenProps.check, 'screen')
        var check = this.props.screenProps.check;
        let { navigation } = this.props;
        return (
            <View style={DrawerItemsComponentStyle.drawerContainer}>
                <ImageBackground style={DrawerItemsComponentStyle.drawerBackgroundImage} source={require('../../../assets/images/draw.png')}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Signup") }}>
                <Image  style={DrawerItemsComponentStyle.drawerHeaderImage}
                    source={require('../../../assets/images/logo.png')} /></TouchableOpacity>
                    <ScrollView>
                        <View style={DrawerItemsComponentStyle.drawerList}>
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName) => { this.navigationScreenFunction('Dashboard') }} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                    <Text style={{ justifyContent: 'flex-end' }}>Home</Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName) => { this.navigationScreenFunction('Rate') }} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                    Services Rate
                              </Text>
                            </TouchableOpacity>
                          
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName) => { this.navigationScreenFunction('Services') }} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                    Services Details
                              </Text>
                            </TouchableOpacity>

                          
                                    {/* <TouchableOpacity style={[DrawerItemsComponentStyle.drawerListItem, DrawerItemsComponentStyle.logoutButton]} activeOpacity={0.6}
                                    onPress={(nextRouteName)=>{this.props.navigation.navigate('Login')}}
                                    >

                                        <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                            Logout
                              </Text>
                                    </TouchableOpacity> */}
                                   
                        </View>
                    </ScrollView>
                </ImageBackground>

            </View>
        );
    }

};


