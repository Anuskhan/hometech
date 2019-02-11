import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Button,
  View
} from 'react-native';
import firebase from 'firebase';



export default class Myapp extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      logedIn:false
    }
  }
  
  componentDidMount() {
    firebase.database().ref("/").child('/add').on('child_added', snap => {
        obj = snap.val();
        obj.key = snap.key
      this.setState({arr:obj})
    })
    console.log("obj")
      
      
  }
 add =()=>{
    let obj={name:"anas",
    class:"matric"
}
    alert("hello")
    firebase.database().ref("/").child('/add').child('/ad').child('sd').push(obj).then(()=>{alert("yes")})
    console.log("yeeeeeeee",this.state.arr)

 } 
  render() {
    return (
        <View style={styles.container}>
     <Text>hello</Text>
     <Button onPress={this.add} title="add"/>
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
