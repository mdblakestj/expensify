import * as firebase from 'firebase'


  // Initialize Firebase


    // Initialize Firebase


  firebase.initializeApp(config);

  firebase.database().ref().set({
    jobs: 'Test'
  })
