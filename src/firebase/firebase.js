import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default}