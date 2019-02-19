import React from 'react';
import {Dimensions} from 'react-native';
import DrawerItemsComponent from './drawerItemsComponent/DrawerItemsComponent'
import DrawerItemsAdmin from './drawerItemsComponent/DrawerItemAdmin'
import { DrawerNavigator } from 'react-navigation';
import {MainStack} from './stack';
import {AdminMainStack} from './adminstack';

export const Drawer = DrawerNavigator ({
    screens: {
        screen: MainStack
    }
}, {
    contentComponent: DrawerItemsComponent,
    drawerWidth: Dimensions.get('window').width/1.30
});
export const AdminDrawer = DrawerNavigator ({
    screens: {
        screen: AdminMainStack
    }
}, {
    contentComponent: DrawerItemsAdmin,
    drawerWidth: Dimensions.get('window').width/1.30
});
