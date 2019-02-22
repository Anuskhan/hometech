
    import React, { Component } from 'react';
    import  LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
    import MapView from 'react-native-maps';
    import { TextField } from 'react-native-material-textfield';
    import DashboardStyle from '../dashboard/DashboardStyle';
    import EventDetailStyle from './EventDetailStyle';
    import firebase from "firebase";
    import Communications from 'react-native-communications';

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
                date:""
    
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
                category:item.category,
                date:item.date
              });
       
    }
            
        }
       
     
        render() {
    
            let { name,category,address,phone,date} = this.state;
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
                    
                  <View style={EventDetailStyle.card}>
                     
                        <View style={EventDetailStyle.cardContainer}>
                            
                            <View style={EventDetailStyle.cardListItem}>
                                <Text style={EventDetailStyle.cardListItemTitle}>Name : </Text>
                                <Text style={EventDetailStyle.cardListItemText}>{name}</Text>
                            </View>
                            
                            <View style={EventDetailStyle.cardListItem}>
                                <Text style={EventDetailStyle.cardListItemTitle}>Address : </Text>
                                <Text style={EventDetailStyle.cardListItemText}>{address}</Text>
                            </View>
                            
                            <View style={EventDetailStyle.cardListItem}>
                                <Text style={EventDetailStyle.cardListItemTitle}>Category : </Text>
                                <Text style={EventDetailStyle.cardListItemText}>{category}</Text>
                            </View>
                            <View style={EventDetailStyle.cardListItem}>
                                <Text style={EventDetailStyle.cardListItemTitle}>Date : </Text>
                                <Text style={EventDetailStyle.cardListItemText}>{date}</Text>
                            </View>
                            <View style={EventDetailStyle.cardListItem}>
                                <Text style={EventDetailStyle.cardListItemTitle}>Phone : {phone}</Text>
                                <TouchableOpacity style={EventDetailStyle.listItemDetailIconButton} onPress={() => Communications.phonecall(phone, true)}>
                    <Image  style={EventDetailStyle.listItemDetailIcon} source={require('../../assets/images/phone.png')}/>
                </TouchableOpacity> 
                            </View>

                           


                        </View>
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
        });
    
    