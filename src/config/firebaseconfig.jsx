import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAoilP_AnRKBaf363D7H2XrLa0wOCIV60U",
      authDomain: "hypernova-rent-a-car.firebaseapp.com",
      databaseURL: "https://hypernova-rent-a-car-default-rtdb.firebaseio.com",
      projectId: "hypernova-rent-a-car",
      storageBucket: "hypernova-rent-a-car.appspot.com",
      messagingSenderId: "599992758039",
      appId: "1:599992758039:web:9d082b100c06fb09769152"
  }
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;