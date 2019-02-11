import { StyleSheet, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default LoginStyle = StyleSheet.create({
    loginBackgroundImage: {
        flex: 1
    },
    ButtonStyle: {
     backgroundColor:'#d9005f',
     width:'90%',
    alignItems:'center',
    color:'blue',
    borderRadius:5,
    height:50,
    marginVertical:20,
    justifyContent:'center',
    
},

    viewBoxTop: {
        height:'40%',
          justifyContent: 'center',
           alignItems: 'center',
    },

    viewBoxButtom: {
        height:'60%',
    },
    buttomText: {
        color: '#053173'
    },
    textColor: {
        color:'#ffffff',
    },

    Logoimage: {
        width: imageWidth,
        // marginTop:50,
        marginBottom:20,
        resizeMode: 'contain'
    },

        TouchableOpacityStyle: {
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
        color:'#ffffff'
        
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
        alignItems:'center',
        
        
    },
    TextInputStyle: {
       flex:1,       
       color:'grey',
       marginRight:10
       
      
    },

    
});
