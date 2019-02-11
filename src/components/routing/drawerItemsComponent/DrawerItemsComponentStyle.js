import { StyleSheet, Dimensions, Platform } from 'react-native';

export default DrawerItemsComponentStyle = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    drawerHeaderImage: {
       
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5,
        padding:5
      
    },
    drawerBackgroundImage: {
        flex: 1
    },
    drawerList: {
        padding: 15
    },
    drawerListItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    drawerListItemText: {
        fontSize: 20,
        color: '#fff'
    },
    logoutButton: {
        borderBottomColor: 'transparent'
    }
})
