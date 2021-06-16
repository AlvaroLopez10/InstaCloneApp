/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAb-fd-_F1yQqd_BVUTLvrkohXj33k6wD8",
    authDomain: "igclone-f64d9.firebaseapp.com",
    databaseURL: "https://igclone-f64d9.firebaseio.com",
    projectId: "igclone-f64d9",
    storageBucket: "igclone-f64d9.appspot.com",
    messagingSenderId: "428057971756",
    appId: "1:428057971756:web:08175b49d19e94ebb61589"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
