import { AppRegistry } from 'react-native';
import App from './App';
console.disableYellowBox = true;

import firebase from "firebase";
var config = {
    apiKey: "AIzaSyBMGOp9DyLk96ssId7m_qMw46XZp1VmsuQ",
    authDomain: "hometechnician-9f379.firebaseapp.com",
    databaseURL: "https://hometechnician-9f379.firebaseio.com",
    projectId: "hometechnician-9f379",
    storageBucket: "hometechnician-9f379.appspot.com",
    messagingSenderId: "200810808703"
  };
  firebase.initializeApp(config);

  

AppRegistry.registerComponent('TechnicianExpert', () => App);
