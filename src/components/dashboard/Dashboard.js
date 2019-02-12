import React, { Component } from 'react';
import  LocationServicesDialogBox from "react-native-android-location-services-dialog-box";


import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,BackHandler, DeviceEventEmitter,
    Button,
    ImageBackground
} from 'react-native';
// import { Container, Header, Content, Button, Text } from 'native-base';

//  { Button, Card, CardActions } from 'react-native-paper';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            mapRegion: null,
        
            initialPosition: 'unknown',
        }
    }

    onChange(name, val){
        this.setState({[name]: val})
    }
    getCurrentPosition=()=> {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let region={   
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00115,
                longitudeDelta: 0.000121,
                }
              this.setState({
                error: null,
                mapRegion: region
              });
            },
            (error) => this.setState({ error: error.message }),
          );
    }
    componentDidMount(){
    //    this.checkApi();
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
        ok: "YES",
        cancel: "NO",
        enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
        showDialog: true, // false => Opens the Location access page directly
        openLocationServices: true, // false => Directly catch method is called if location services are turned off
        preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
        preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
        providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
    }).then(function(success) {
        // success => {alreadyEnabled: true, enabled: true, status: "enabled"}
            navigator.geolocation.getCurrentPosition((position) => {
                let initialPosition = JSON.stringify(position);
                this.setState({ initialPosition });
                this.getCurrentPosition();
                // console.log(this.getCurrentPosition(),"sds")

            }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
        }.bind(this)
    ).catch((error) => {
        console.log(error.message);
    });

    DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
        console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
    });
    this.getCurrentPosition();
    console.log(this.getCurrentPosition(),"sds")

       this.props.screenProps.logout(true)
    }
    checkApi=()=>{
        
        console.log("componentDidMount+======")
        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        axios.get('http://connfa.com/api/getinfo/')
        .then((res) => {
      console.log(res.data,"response")    
    }).catch((error) => { 
        
        console.log(error,"error")    
        }
        );
    }
    render() {
        return (
          
                <View >
                  <Text>anas khan</Text>
                </View>
            
               
        );
    }

};
// import React, { Component } from "react";
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import { Container,Item,Input,Label,Form, Header,Body, Button, Content, Card, CardItem,ActionSheet, Text } from "native-base";
// var BUTTONS = [
//   { text: "Option 0",  iconColor: "#2c8ef4" },
//   { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
//   { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
//   { text: "Delete", icon: "trash", iconColor: "#fa213b" },
//   { text: "Cancel", icon: "close", iconColor: "#25de5b" }
// ];
// var DESTRUCTIVE_INDEX = 3;
// var CANCEL_INDEX = 4;
// export default class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//         <Container>
//         <Header style={{ backgroundColor: 'brown'}} title="app"/>
//         <Grid>
//         <Grid>
//           <Row style={{ backgroundColor: 'yellow',flex:1 }}></Row>
//           <Row style={{ backgroundColor: 'purple',flex:1 }}></Row>
//           <Row style={{ backgroundColor: 'yellow',flex:1 }}></Row>
//         </Grid>
//         <Grid>
//           <Row style={{ backgroundColor: 'pink',flex:1 }}></Row>
//         </Grid>
//           <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
//           <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
//           <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
//         <Grid>
//           <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
//           <Col style={{ backgroundColor: 'red', height: 200 }}></Col>
//         </Grid>
      
//         </Grid>
       
//     </Container>
//     );
//   }
// }

// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert
// } from 'react-native';
// // import { Container,Item,Input,Label,Form, Header,Body, Button, Content, Card, CardItem,ActionSheet, Text } from "native-base";
// import SmsAndroid from 'react-native-get-sms-android';
// // import Contacts from 'react-native-contacts';
// export default class Dashboard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       sendTo: '',
//       sendBody: '',
//       smsList: []
//     };

//     this.listSMS();
//   }
// componentDidMount(){
//   // Contacts.getAll((err, contacts) => {
//   //   if (err) throw err;
  
//   //   // contacts returned
//   //   console.log(contacts)
//   // })
// }
//   listSMS() {
//     var filter = {
//       box: 'inbox',
//       maxCount: 10,
//     };

//     SmsAndroid.list(JSON.stringify(filter), (fail) => {
//       console.log("Failed with this error: " + fail)
//     }, (count, smsList) => {
//       var arr = JSON.parse(smsList);
//       console.log(arr);
//       this.setState({ smsList: arr });
//     });
//   }

//   deleteSMS(id) {
//     console.log(id);
//     SmsAndroid.delete(id, (err) => {
//       Alert.alert("Failed to deleted SMS. Check console");
//       console.log("SMS DELETE ERROR", err);
//     }, (success) => {
//       Alert.alert("SMS deleted successfully");
//       this.listSMS();
//     });
//   }

//   showSMS() {
//     return this.state.smsList.map(sms => {
//       return <View style={{ borderColor: '#bbb', borderWidth: 1 }} key={sms._id}>
//         <Text>From: {sms.address}</Text>
//         <Text>Body: {sms.body}</Text>
//         <Text>Id: {sms._id}</Text>
//         <TouchableOpacity onPress={() => this.deleteSMS(sms._id)}
//           style={{ width: 90, margin: 5, borderColor: '#bbb', borderWidth: 1 }} >
//           <Text>DELETE SMS</Text>
//         </TouchableOpacity>
//       </View >
//     })
//   }

//   sendSMS() {
//     SmsAndroid.autoSend(this.state.sendTo, this.state.sendBody, (err) => {
//       Alert.alert("Failed to send SMS. Check console");
//       console.log("SMS SEND ERROR", err);
//     }, (success) => {
//       Alert.alert("SMS sent successfully");
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{ flex: 5 }}>
//           <Text style={styles.welcome}>
//             Latest Messages
//         </Text>
//           <ScrollView>
//             {this.showSMS()}
//           </ScrollView>
//         </View>

//         <View style={{ flex: 5 }}>
//           <Text style={styles.welcome}>
//             Send SMS
//           </Text>

//           <Text>To</Text>
//           <TextInput
//             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//             onChangeText={(text) => this.setState({ sendTo: text })}
//             value={this.state.sendTo}
//             keyboardType={'numeric'}
//           />

//           <Text>Message</Text>
//           <TextInput
//             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//             onChangeText={(text) => this.setState({ sendBody: text })}
//             value={this.state.sendBody}
//           />

//           <TouchableOpacity
//             onPress={() => this.sendSMS()}
//             style={{ marginTop: 10, borderColor: '#bbb', borderWidth: 1 }} >
//             <Text style={{ textAlign: 'center' }}>SEND SMS</Text>
//           </TouchableOpacity>

//         </View>

//       </View >
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

