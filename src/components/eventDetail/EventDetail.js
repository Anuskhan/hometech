
    import React, { Component } from 'react';
    import  LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
    import MapView from 'react-native-maps';
    import { TextField } from 'react-native-material-textfield';
    import DashboardStyle from '../dashboard/DashboardStyle';
    import EventDetailStyle from './EventDetailStyle';
    import firebase from "firebase";
    // complain detailss
    
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
    
    
    export default class EventDetail extends Component {
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
    
        componentDidMount(){
            // let params =this.props.navigation.state.params
            
       let { item } = this.props.navigation.state.params;
      
       if (item) {
        let region={   
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.00115,
                longitudeDelta: 0.000121,
                }
              this.setState({
                error: null,
                mapRegion: region,
                name:item.name,
                phone:item.phone,
                address:item.address,
                complainType:item.category
              });
       
    }
            
        }
       
     
        render() {
    
            let { name,category,address,phone} = this.state;
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
                    
                    </View>
                    <View style={EventDetailStyle.listItemDetail}>
                    {name? <Text style={EventDetailStyle.listItemSubText}>{name}</Text> : null}
                    {address ? <Text style={EventDetailStyle.listItemSubText}>{address}</Text> : null}
                    <Text style={EventDetailStyle.listItemText}>category</Text>
                </View>
                {phone ? <TouchableOpacity style={EventDetailStyle.listItemDetailIconButton} onPress={() => Communications.phonecall(phone, true)}>
                    <Icon name="ios-call" style={EventDetailStyle.listItemDetailIcon} />
                </TouchableOpacity> : null}
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
        });
    
    