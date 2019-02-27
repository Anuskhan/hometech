import React, { Component } from "react";
import { Text, TextInput,Image, View,ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import EventStyle from "../events/EventStyle";


export default class Services extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

   
 

    render() {
        return (
            <ScrollView>
            <View style={EventStyle.subHeader}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerOpen'); } }
                style={{flex:0.7}}>
                <Image  style={{height:28,width:28}} source={require('../../assets/images/menu.png')}/>
                
              </TouchableOpacity>
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
<Image style={styles.image} source={require('../../assets/images/oven.png')} />
<Text style={styles.txt}>OVENS</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            I Will Be Providing Repairing Services , Ovens and Micro Ovens products both national and international products. I am an expertise technicians who are capable of giving you the best services as on when needed. Kindly contact us for more details.</Text>
</View>
            
  </View>
  <View style={styles.cardSection2}>
<Image style={styles.image} source={require('../../assets/images/wash.png')} />
<Text style={styles.txt}>WASHING MACHINE</Text>
  <View style={{marginTop:"3%"}}>
            <Text style={{color:"black",padding:10,fontWeight:"bold"}}>
            Our Washing Machine Services is not brand specific. We service all of the popular Washing systems around for all types of businesses and institutions.We offer comprehensive services including installation, and maintenance.
           </Text>
</View>      
  </View>
  
  
  <View style={styles.cardSection2}>
 
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
     alignItems: 'center',
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