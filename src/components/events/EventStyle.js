import {StyleSheet, Dimensions, Platform} from 'react-native';
let {height, width} = Dimensions.get('screen');

export default EventStyle = StyleSheet.create({
    listItem: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3'
    },
    listItemDetail: {
        flex: 1
    }, 
    seen: {
        flex: 1
    }, 
    delbtntxt: {
        color: '#c22627',
        fontSize: 20
    }, 
    delbtnEdit: {
        color: 'blue',
        fontSize: 20
    }, 
    delbtn: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        paddingLeft: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#d3d3d3'
    }, 
    subHeader:{
        backgroundColor:'#f29638',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:15,
        marginTop:10,
        marginHorizontal:10,
        borderRadius: 10,
        flex:1
        
    } ,
  
    subHeaderTitle: {
        flex:1,
        marginRight:15,
        fontSize:18,
        color: '#053173',
        fontWeight: 'bold'
      
    },
    title: {
        // flex:1,
        marginRight:15,
        fontSize:18,
        color: '#053173',
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center',
      
    },
});



