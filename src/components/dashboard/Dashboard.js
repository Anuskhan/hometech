import React, { Component } from 'react';
import  LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import MapView , { PROVIDER_GOOGLE }  from 'react-native-maps';
import { TextField } from 'react-native-material-textfield';
import DashboardStyle from './DashboardStyle';
import firebase from "firebase";
import moment from "moment";
import Communications from 'react-native-communications';
// main page map waala 
import Geolocation from 'react-native-geolocation-service';
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

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            mapRegion: {
              latitude:67.0011 ,
              longitude:24.8607,
              latitudeDelta: 0.00115,
              longitudeDelta: 0.000121,
            }
            ,
        
            initialPosition: 'unknown',
            name:'',
            phone:'',
            address:'',
            category:'',
            subcategory:'',
            arr:[],
         
        }
    }

    onChange(name, val){
        this.setState({[name]: val})
    }
    getCurrentPosition=()=> {
        // navigator.geolocation.getCurrentPosition(
            Geolocation.getCurrentPosition(
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
      permistion=()=>{
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
          Geolocation.getCurrentPosition((position) => {
                  let initialPosition = JSON.stringify(position);
                  this.setState({ initialPosition });
                  this.getCurrentPosition();
  
              }, error => console.log(error), {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000});
          }.bind(this)
      ).catch((error) => {
          console.log(error.message);
      });
  
      DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
          console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
      });
        
      }  
    componentDidMount(){

     
        this.permistion();
        
      this.getCurrentPosition();
    }
 
    onChange(name, val) {
        this.setState({ [name]: val })
    }  
    categoryfun = (cat) => {
        this.setState({ category: cat })
       
     }
    subcategoryfun = (cat) => {
        this.setState({ subcategory: cat })
       
     }
 
  further =()=>{
    let { address,category,mapRegion,subcategory} = this.state;
    let item = {address,category,subcategory,seen:true,latitude:mapRegion.latitude,longitude:mapRegion.longitude};
    this.props.navigation.navigate("Login",item) 
}
    render() {

        let { category,address,mapRegion,subcategory} = this.state;
        let disable = !(category && address );
        return (
                <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/main.jpg')}>

          <View style={styles.draw}>

          <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerOpen'); } }
            style={{flex:1,height:40, paddingLeft:8,padding:5}}>
            <Image  style={{height:32,width:32}} source={require('../../assets/images/menu.png')}/>
            
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,flexDirection: 'row',justifyContent:'flex-end', paddingLeft:8,padding:5}} onPress={() => Communications.phonecall('03030122259', true)}>
          <Text style={{height:32,fontSize: 20,color:'black'}}> <Image  style={{height:32,width:32}} source={require('../../assets/images/phhone.png')}/> 03030122259 </Text>
                            
                          </TouchableOpacity> 
            </View>

   <ScrollView>
                <View >
                  
                <View style={styles.mapContainer}>    
                <View style={styles.container}>
                
                  <MapView
                   provider={PROVIDER_GOOGLE}
            region={this.state.mapRegion}
            style={styles.map}
            showsUserLocation={true}
            />

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


              <TouchableOpacity onPress={()=>{ this.categoryfun('AC REPAIR') }}
                style={(category=="AC REPAIR")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/1.png')}/>
                <Text style={styles.txt}>AC REPAIR</Text>
              </TouchableOpacity>

             

              <TouchableOpacity onPress={()=>{ this.categoryfun('REFRIGERATION') }}
             style={(category=="REFRIGERATION")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/3.png')}/>

                <Text  style={styles.txt}>REFRIGERATION</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ this.categoryfun('SALE PURCHASE') }}
             style={(category=="SALE PURCHASE")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/ru.png')}/>

                <Text  style={styles.txt}>SALE PURCHASE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ this.categoryfun('OVEN') }}
             style={(category=="OVEN")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/oven.png')}/>

                <Text  style={styles.txt}>OVEN REPAIR</Text>
              </TouchableOpacity>

            

          
              <TouchableOpacity onPress={()=>{ this.categoryfun('Washing Machine') }}
               style={(category=="Washing Machine")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/wash.png')}/>

                <Text  style={styles.txt}>WASHING MACHINES</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ this.categoryfun('ELECTRICIAN') }}
                style={(category=="ELECTRICIAN")?styles.opttest:styles.opt}>
                <Image  style={styles.img} source={require('../../assets/images/2.png')}/>

                <Text  style={styles.txt}>ELECTRICIAN</Text>
              </TouchableOpacity>

            </ScrollView>
            </View>

            {
          (category=="AC REPAIR")?
            <View style={{color:'#ffff',borderBottomColor: '#ffff', borderBottomWidth: 0.5}}>
            <ScrollView
              horizontal={true}
              style={{
                marginVertical: 10,
                
                paddingVertical: 0,
                width: "100%"
              }}>
     
              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Dc Inverter') }}
                style={(subcategory=="Dc Inverter")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/cooler1.png')}/>
                <Text style={styles.txt}>Dc Inverter</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Window Ac') }}
                style={(subcategory=="Window Ac")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/air-conditioner.png')}/>
                <Text style={styles.txt}>Window Ac</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Tower Ac') }}
                style={(subcategory=="Tower Ac")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/cooler.png')}/>
                <Text style={styles.txt}>Tower Ac</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ this.subcategoryfun('110 Ac') }}
                style={(subcategory=="110 Ac")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/cooler1.png')}/>
                <Text style={styles.txt}>110 Ac</Text>
              </TouchableOpacity>
              
            </ScrollView>
                  
            </View>
            : null
            }

          {(category=="REFRIGERATION")?
           <View style={{color:'#ffff',borderBottomColor: '#ffff', borderBottomWidth: 0.5}}>
           <ScrollView
             horizontal={true}
             style={{
               marginVertical: 10,
               
               paddingVertical: 0,
               width: "100%"
             }}>
    
              <TouchableOpacity onPress={()=>{ this.subcategoryfun('De Frozen Fridge') }}
                style={(subcategory=="De Frozen Fridge")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/3.png')}/>
                <Text style={styles.txt}>De Frozen Fridge</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Non Frozen Fridge') }}
                style={(subcategory=="Non Frozen Fridge")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/3.png')}/>
                <Text style={styles.txt}>Non Frozen Fridge</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Water Dispenser') }}
                style={(subcategory=="Water Dispenser")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/water-dispenser.png')}/>
                <Text style={styles.txt}>Water Dispenser</Text>
              </TouchableOpacity>
              </ScrollView>
                  
                  </View>
            :null
            }
          {(category=="Washing Machine")?
            <View style={{color:'#ffff',borderBottomColor: '#ffff', borderBottomWidth: 0.5}}>
            <ScrollView
              horizontal={true}
              style={{
                marginVertical: 10,
                
                paddingVertical: 0,
                width: "100%"
              }}>
              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Automatic') }}
                style={(subcategory=="Automatic")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/wash.png')}/>
                <Text style={styles.txt}>Automatic</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ this.subcategoryfun('Manual') }}
                style={(subcategory=="Manual")?styles.opttest:styles.opt}>
                <Image  style={styles.img1} source={require('../../assets/images/wash.png')}/>
                <Text style={styles.txt}>Manual</Text>
              </TouchableOpacity>
             
            
              </ScrollView>
                  
                  </View>
            :null
            } 
 
     
                    <TextField
                        label='Address'
                        tintColor = '#ffff'
                        textColor = '#ffff'
                        baseColor = '#ffff'
                        value={this.state.address}
                        onChangeText={this.onChange.bind(this, 'address')}
                    />
                    
                       </View>
                </View>
               
                        <TouchableOpacity disabled={disable} onPress={()=>{this.further()}} style={DashboardStyle.ButtonStyle}
                            >
                                <Text style={DashboardStyle.buttomText}>
                                Further process
                            </Text>
                            </TouchableOpacity>
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
        height:220
    },
  
    container: {
        ...StyleSheet.absoluteFillObject,
         flex:1,
         height:220,
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
      img1:{
        width:28,
        height:28,
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
      draw:{
        height:40,flexDirection: 'row',backgroundColor: '#f29638'

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

