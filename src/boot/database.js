// import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'IzaSyB7-M-mpFgtVd7lEfDxgp6wpjG4CWaaP6Y',
  authDomain: 'cellphoneebay-bb223.firebaseapp.com',
  projectId: 'cellphoneebay-bb223',
  storageBucket: 'cellphoneebay-bb223.appspot.com',
  messagingSenderId: '891393814283',
  appId: '1:891393814283:web:05fb6f85026738d9fe7c0e'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
export { db }
