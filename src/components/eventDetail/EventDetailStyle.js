import {StyleSheet, Dimensions, Platform} from 'react-native';
import EventDetail from './EventDetail';

export default EventDetailStyle = StyleSheet.create({
    listItemDetail: {
        flex: 1
    },
    listItemText: {
        fontSize: 18,
        color: 'white'
    },
    listItemSubText: {
        fontSize: 14,   
        color: 'white'

    },
    listItemDetailIconButton: {
        width: 32,
        height: 32,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: Platform.OS === 'ios' ? 32/2 : 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:"30%"

    },
    listItemDetailIcon: {
       width:24,
       height:24,
        color: 'black',
    },
    card: {
        marginTop: 5
    },cardProfileImageMainContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 2,
        alignItems: 'center'
    }, cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 5,
        paddingTop: 10,
        marginHorizontal: 15,
        marginBottom: 15,
        position: 'relative'
    },
    cardListItem: {
        flexDirection: 'row',
        paddingBottom: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        marginTop: 5,
        alignItems: 'center'
    },
    cardListItemText: {
        fontSize: 14,
        color: '#000',
        flex: 1,
        marginLeft: 5
    }, 
     cardListItemTitle: {
        fontSize: 14,
        color: '#000',
        fontWeight: '800'
    },
});