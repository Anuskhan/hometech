import { StackNavigator } from 'react-navigation';
import { StyleSheet, Image, View, Text } from 'react-native';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Events from '../events/Event';
import EventDetail from '../eventDetail/EventDetail';
import Speaker from '../speaker/Speaker';
// import SpeakerDetail from '../speakerDetails/SpeakerDetail';
import SignUp from '../signup/signup';
import Services from '../services/services';
import Rate from '../rate/rate';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';



const styles = StyleSheet.create({
    test: {
        fontSize: 30,
        alignSelf: 'center',

    },
    buttonStyle: {
        backgroundColor: '#053173',
        marginBottom: 3,

    },
    headerLogoContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 7
    },
    headerLogoImage: {
        width: 50,
        height: 38
    },
});
const headerTintColor = "#fff";
const headerStyle = {

    backgroundColor: '#053173',
    height: 55
};


export const MainStack = StackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null,
        }
    },
  
    Rate: {
        screen: Rate,
        navigationOptions: {
            header: null,
        }
    },
    Services: {
        screen: Services,
        navigationOptions: {
            header: null,
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Signup: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        }
    },
  
    
   
}, {
        initialRouteName: 'Dashboard',
        navigationOptions: {
            headerTitle: <View style={styles.headerLogoContainer}>
                <Image style={styles.headerLogoImage} source={require('../../assets/images/background.jpg')} />

            </View>,
            headerTintColor: headerTintColor,
            headerStyle: { ...headerStyle }
        }
    });