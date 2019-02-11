import React from 'react';
import {Dimensions} from 'react-native';
import DrawerItemsComponent from './drawerItemsComponent/DrawerItemsComponent'
import { DrawerNavigator } from 'react-navigation';
import {MainStack} from './stack';

export const Drawer = DrawerNavigator ({
    screens: {
        screen: MainStack
    }
}, {
    contentComponent: DrawerItemsComponent,
    drawerWidth: Dimensions.get('window').width/1.30
});
