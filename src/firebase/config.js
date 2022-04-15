import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDL9LKcJoG5K-YYWPWAaCz-kIu8zTV3_aY",
  authDomain: "project-management-3b85e.firebaseapp.com",
  projectId: "project-management-3b85e",
  storageBucket: "project-management-3b85e.appspot.com",
  messagingSenderId: "287159451588",
  appId: "1:287159451588:web:f6e56e208dd99f246cae91"
};

firebase.initializeApp( firebaseConfig )

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.timestamp

export { projectFirestore, projectAuth, timestamp }