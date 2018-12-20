import * as firebase from 'firebase'


  // Initialize Firebase


    // Initialize Firebase
var config = {
      apiKey: "AIzaSyBMJ_mAcuLY5afEJMDi4Nsn-_Zl8tXZTDE",
      authDomain: "expensify-46146.firebaseapp.com",
      databaseURL: "https://expensify-46146.firebaseio.com",
      projectId: "expensify-46146",
      storageBucket: "expensify-46146.appspot.com",
      messagingSenderId: "321343540425"
    };


  firebase.initializeApp(config);

  firebase.database().ref().set({
    jobs: 'Test'
  })
