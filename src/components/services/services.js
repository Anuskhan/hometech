import React, { Component } from "react";
import { Text, TextInput,Image, View,ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import EventStyle from "../events/EventStyle";

import { TextField } from 'react-native-material-textfield';

export default class Services extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
    }
 

    render() {
        let { } = this.state;
        return (
            <ScrollView>
            <View style={EventStyle.subHeader}>
                <Text style={EventStyle.title}>Services</Text>

            </View>
            <View style={styles.container}>
 
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/1.png')} />
<Text style={styles.txt}>AC REPAIR SERVICE</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>We can provide expert service at your doorstep for all your Air conditioning Our range of services include complete repair, installation of a new AC and even regular servicing of all brands across all localities of Pakistan.
            </Text>
</View>
            
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/2.png')} />
<Text style={styles.txt}>ELECTRICIAN SERVICE</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            We know you’d rather not fiddle with your electrical wiring or outlets unless you know exactly what you’re doing. When you use the our platform to book a professional electrical contractor, you can take all your stress out of the equation.
            </Text>
</View>
            
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/3.png')} />
<Text style={styles.txt}>REFRIGERATION SERVICE</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            Our Refrigeration Services is not brand specific. We service all of the popular refrigeration systems around for all types of businesses and institutions.We offer comprehensive services including installation, and maintenance.
            </Text>
</View>
            
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/5.png')} />
<Text style={styles.txt}>PAINTER SERVICES</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            Get a new coat and make your walls look attractive. Technician Expert deals with quality services in interior and exterior house and commercials painting to make your walls look good.
            </Text>
</View>      
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/6.png')} />
<Text style={styles.txt}>PLUMBER SERVICES</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            We deal in almost all kind of plumbing work which includes PPR Fittings, CPVC Fitting . Be it a major contract or a minor repair work, just give us a call and get your plumbing worries fixed.
             </Text>
</View>      
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/b1.png')} />
<Text style={styles.txt}>MASON SERVICES</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            We offer complete masonry services to commercial and residential customer. All our masons are well experienced and work under professional.Just sit back and indulge with your rest.
            </Text>
</View>      
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/7.png')} />
<Text style={styles.txt}>GENERATOR REPAIR SERVICE</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            Our professionals ensure to repair precisely packaging equipment to attain their enhanced performance and increase their functional life. Further, our professionals Generator-Repair-pstringently check the damaged generator to find exact faul.
             </Text>
</View>      
  </View>

</View>
</ScrollView>
        );

    }

}
const styles = {
    container: {
     flex: 1,
     backgroundColor: 'white',
     alignItems: 'center'
    },
    image: {
     width: 50,
     height: 50,
     marginTop:10,
    },
  
    cardSection2: {
      alignItems: 'center',
      justifyContent: 'center',
    //   position: 'absolute',
      top: 2,
     flex:0.5,
      width: 330,
    //   height: 150,
      borderRadius: 8,
    //   backgroundColor: 'white',
      zIndex: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      marginTop:10,
      marginBottum:10,
    },
    txt: {
      alignItems: 'center',
      justifyContent: 'center',
    color:"red",
    // marginTop:50,
    paddingTop:5,
    fontSize:18,
    fontWeight:"bold"
    }
  }