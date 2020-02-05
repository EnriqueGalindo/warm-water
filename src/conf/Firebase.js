//import firebase from 'firebase'
import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCFNWCUZFUe7TJesPAndFcveQirt3XoCyE",
  authDomain: "project-warm-water.firebaseapp.com",
  databaseURL: "https://project-warm-water.firebaseio.com",
  projectId: "project-warm-water",
  storageBucket: "project-warm-water.appspot.com",
  messagingSenderId: "448306602599",
  appId: "1:448306602599:web:97d4c1ce9f1b4e498d6ac2",
  measurementId: "G-7F8N2BP7MK"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  //firebase.analytics();

  // db.collection("users").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //      let data = `${doc.id} => ${doc.data()}`
  //      console.log(data);
  //   });
  // });

  export default firebaseApp
  export {db}