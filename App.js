import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import { Drawer } from './src/components/routing/route'
import {AdminDrawer} from './src/components/routing/route'
import OfflineNotice from './src/components/offlinenoti';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      checkNav:true
    }
  }
  navfun(value){
    console.log(value,"value")
    alert(value)
    this.setState({checkNav: value})
  }
  
  
  render() {
    return (
        <View style={styles.container}>
       {  (this.state.checkNav) ?
          <Drawer screenProps={{navfun:this.navfun.bind(this)}}/>
          :
          
          <AdminDrawer />
        }
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
