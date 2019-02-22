// import React, { Component } from 'react';
import MapView , { PROVIDER_GOOGLE }  from 'react-native-maps';

// import { TextField } from 'react-native-material-textfield';
// import DashboardStyle from './DashboardStyle';
// import firebase from "firebase";
// import moment from "moment";
// // main page map waala 
// import Geolocation from 'react-native-geolocation-service';
// import {
//     Text,
//     View,
//     Image,
//     TextInput,Picker,
//     ScrollView,StyleSheet,
//     TouchableOpacity,BackHandler, DeviceEventEmitter,
//     Button,
//     ImageBackground
// } from 'react-native';

// export default class Dashboard extends Component {
//     constructor() {
//         super();
//         this.state = {
//             mapRegion: null,
        
//             initialPosition: 'unknown',
//             name:'',
//             phone:'',
//             address:'',
//             category:'',
//             arr:[],

//         }
//     }

//     onChange(name, val){
//         this.setState({[name]: val})
//     }
    

//     componentDidMount(){
     
   

//     Geolocation.getCurrentPosition(
//       (position) => {
//         let region={   
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         latitudeDelta: 0.00115,
//         longitudeDelta: 0.000121,
//         }
//       this.setState({
//         error: null,
//         mapRegion: region,
       
//       });
//     },
//     (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
   
 
//        }

//     render() {

       
//         return (
//             <ScrollView>

          
//                 <View >
                  
             
//                   <MapView
//                   //  provider={PROVIDER_GOOGLE}
//             region={this.state.mapRegion}
//             style={styles.map}
//             // showsUserLocation={true}
//             />

             
//                 </View>
               
//                 </ScrollView>
            
//         );
//     }

// };

// const styles = StyleSheet.create({

//         map: {
//         ...StyleSheet.absoluteFillObject,
//         },
    
   
//     });


import React, { Component } from 'react';
import {
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class App extends Component<{}> {
  watchId = null;

  state = {
    loading: false,
    updatesEnabled: false,
    location: {},
    mapRegion: null,
  };

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
        (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
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
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50 }
      );
    });
  }

  
componentDidMount(){
  // this.getLocation()
}
 

  render() {
    const { loading, location, updatesEnabled,mapRegion } = this.state;
    return (
      <View style={styles.mapContainer}>    
      <View style={styles.container}>
      
      {/* <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView> */}

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 12
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    },
  result: {
      borderWidth: 1,
      borderColor: '#666',
      width: '100%',
      paddingHorizontal: 16
  },
  buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 12,
      width: '100%'
  }
});
