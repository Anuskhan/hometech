import { StyleSheet, Dimensions } from 'react-native';
import SignUp from './signup';

const imageWidth = Dimensions.get('window').width / 2;

export default signUpStyle = StyleSheet.create({
    loginBackgroundImage: {
        flex: 1
    },
    ButtonText: {
        color:'#053173',
       
    },
    ButtonStyle: {
     backgroundColor:'#f29638',
     width:'90%',
    alignItems:'center',
    color:'blue',
    borderRadius:5,
    height:50,
    marginTop:15,
    justifyContent:'center'
    },

    viewBoxTop: {
        height:'35%',
          justifyContent: 'center',
           alignItems: 'center',
    },

    viewBoxButtom: {
        height:'70%',
        marginTop:10,
    },

    Logoimage: {
        width: imageWidth,
        // backgroundColor:"red",
        // marginTop:30,
        marginBottom:20,
        resizeMode: 'contain'
    },
  
    TextInputView: {
        marginTop:10,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        width: '90%',
        borderRadius:5,
        paddingHorizontal:10,
        alignItems:'center'
        
        
    },
    TextInputStyle: {
       flex:1,       
       color:'grey',
       marginRight:10
    }, 
});
