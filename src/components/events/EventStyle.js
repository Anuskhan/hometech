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
    subHeader:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
    } ,
  
    subHeaderTitle: {
        flex:1,
        marginRight:15,
        fontSize:18,
        color: '#666666'
    },
});



