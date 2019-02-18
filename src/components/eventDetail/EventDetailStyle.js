import {StyleSheet, Dimensions, Platform} from 'react-native';
import EventDetail from './EventDetail';

export default EventDetailStyle = StyleSheet.create({
    listItemDetail: {
        flex: 1
    },
    listItemText: {
        fontSize: 18,
        color: '#000'
    },
    listItemSubText: {
        fontSize: 14
    },
    listItemDetailIconButton: {
        width: 32,
        height: 32,
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderRadius: Platform.OS === 'ios' ? 32/2 : 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItemDetailIcon: {
        fontSize: 24
    },
});