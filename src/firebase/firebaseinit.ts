import * as firebase from 'firebase/app'

import { getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAlA8KhGYSe7zaexrlW1EnZRqmGGpfNdyA",
    authDomain: "pimionic.firebaseapp.com",
    projectId: "pimionic",
    storageBucket: "pimionic.appspot.com",
    messagingSenderId: "783278446426",
    appId: "1:783278446426:web:c8ee329c870f0abc9f0563"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const db = getFirestore(firebaseApp);