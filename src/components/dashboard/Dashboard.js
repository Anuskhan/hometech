import React, { Component } from 'react';
import  LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import MapView from 'react-native-maps';
import { TextField } from 'react-native-material-textfield';
import DashboardStyle from './DashboardStyle';
import firebase from "firebase";
import moment from "moment";
// main page map waala 

import {
    Text,
    View,
    Image,
    TextInput,Picker,
    ScrollView,StyleSheet,
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
            name:'',
            phone:'',
            address:'',
            category:'',
            arr:[],

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
                mapRegion: region,
               
              });
            },
            (error) => this.setState({ error: error.message }),
          );
    }

    componentDidMount(){
        var array = [];
   
        firebase.database().ref('category').on('child_added', snap => {
            obj = snap.val();
            obj.key = snap.key
            array.push(obj);
            this.setState({
              arr: array,
            })
          }) 
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
                console.log(this.getCurrentPosition(),"sds")

            }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
        }.bind(this)
    ).catch((error) => {
        console.log(error.message);
    });

    DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
        console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
    });
    this.getCurrentPosition();


       let { params } = this.props.navigation.state;
      
       if (params) {
           console.log(params,"params")
           this.setState({
               name: params.name,
               phone: params.phone,
            })
            console.log(this.state.name,"item")
       }    
    }
 
    onChange(name, val) {
        this.setState({ [name]: val })
    }  
    categoryfun = (category) => {
        this.setState({ category: category })
     }
  submit =()=>{
      // let obj = { dateOfBirth, religion, email, gender, maritaStatus };
      
      let {  name,phone,address,category,mapRegion} = this.state;
      let date =moment().format(" Do MMM YY");
      let payload = {name,phone,address,category,date,latitude:mapRegion.latitude,longitude:mapRegion.longitude};
      firebase.database().ref("/").child("complain").push(payload).then((successf)=>{
          alert("Your order has been placed ")
          this.setState({
              address:'',
              category:''
            })
        }).catch((err)=>{
            alert(err)
          })
      console.log(payload,"payload");
    // const data = Object.assign(obj, payload);

    } 
    render() {

        let { category,address} = this.state;
        let disable = !(category && address);
        return (
                <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/fmbg.jpg')}>
            <ScrollView>

          
                <View >
                  
                <View style={styles.mapContainer}>    
                <View style={styles.container}>
                
                  <MapView
            region={this.state.mapRegion}
            style={styles.map}
            showsUserLocation={true}
            >
        </MapView>

                </View>
                </View>
                <View style={DashboardStyle.textdev}>
         
                   
                    <View style={{color:'#ffff',borderBottomColor: '#ffff', borderBottomWidth: 0.5}}>
                    <ScrollView
              horizontal={true}
              style={{
                marginVertical: 10,
                
                paddingVertical: 0,
                width: "100%"
              }}>


              <TouchableOpacity onPress={()=>{  this.setState({ category:"AC REPAIR" })}}
                style={(category=="AC REPAIR")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/1.png')}/>
                <Text style={styles.txt}>AC REPAIR</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{  this.setState({ category:"ELECTRICIAN" })}}
                style={(category=="ELECTRICIAN")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/2.png')}/>

                <Text  style={styles.txt}>ELECTRICIAN</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{  this.setState({ category:"REFRIGERATION" })}}
             style={(category=="REFRIGERATION")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/3.png')}/>

                <Text  style={styles.txt}>REFRIGERATION</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{this.setState({ category:"PAINTER" })}}
              style={(category=="PAINTER")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/5.png')}/>

                <Text  style={styles.txt} >PAINTER </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{  this.setState({ category:"PLUMBER" })}}
               style={(category=="PLUMBER")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/6.png')}/>

                <Text  style={styles.txt} >PLUMBER</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{  this.setState({ category:"MASON" })}}
               style={(category=="MASON")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/7.png')}/>

                <Text  style={styles.txt}>MASON </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{  this.setState({ category:"GENERATOR" })}}
               style={(category=="GENERATOR")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/b1.png')}/>

                <Text  style={styles.txt}>GENERATOR</Text>
              </TouchableOpacity>

            </ScrollView>
                    {/* <Picker style={{color:'#ffff',margin:0,padding:0}} selectedValue = {this.state.category} onValueChange = {this.categoryfun}>
               <Picker.Item label = "Category"  />
               {
                    this.state.arr.map((value, index) => {
                    return (
                        <Picker.Item label ={value.category} value = {value.category}/>
                        
                    );
                    })
                }

            </Picker> */}
                    </View>
                            
                    <TextField
                        label='Address'
                        tintColor = '#ffff'
                        textColor = '#ffff'
                        baseColor = '#ffff'
                        value={this.state.address}
                        onChangeText={this.onChange.bind(this, 'address')}
                    />
                        <TouchableOpacity disabled={disable} onPress={()=>{this.submit()}} style={DashboardStyle.ButtonStyle}
                            >
                                <Text style={DashboardStyle.buttomText}>
                                    Book Now
                 </Text>
                            </TouchableOpacity>
                          
                    </View>
                </View>
               
                </ScrollView>
                </ImageBackground>
            
        );
    }

};

const styles = StyleSheet.create({

    map: {
      ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
        height:300
    },
    container: {
        ...StyleSheet.absoluteFillObject,
         flex:1,
         height:300,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      img:{
        width:32,
        height:32,
        alignItems: 'center',
        marginBottom:4,
        justifyContent:'center',
        marginLeft:"20%"
      },
      txt:{
      color:"white"
      },
      opt:{
        marginHorizontal: 10,
        flex:1,
         justifyContent:'center',
         alignContent:'center',

      },
      opttest:{
        marginHorizontal: 10,
        flex:1,
         justifyContent:'center',
         alignContent:'center',
         marginBottom:2,
        borderBottomWidth:2,
        borderBottomColor:'red'
      }
    });

