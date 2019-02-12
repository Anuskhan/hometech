import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import { Drawer } from './src/components/routing/route'
import OfflineNotice from './src/components/offlinenoti';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      logedIn:false
    }
  }
  logout(value){
    console.log(value,"value")
    // this.setState({logedIn: value})
  }
  
  
  render() {
    return (
        <View style={styles.container}>
         <Drawer screenProps={{logout:this.logout.bind(this)}}/>
         <OfflineNotice/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
