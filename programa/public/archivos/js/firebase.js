/**
 * @Date:   2019-07-05T21:12:03-03:00
 * @Last modified time: 2019-07-05T23:12:44-03:00
 */


 const firebaseConfig = {
   apiKey: "AIzaSyDazsXHKkNhY-X5qRQphUEw0qHmKzX299M",
   authDomain: "mobil-web-8b982.firebaseapp.com",
   databaseURL: "https://mobil-web-8b982.firebaseio.com",
   projectId: "mobil-web-8b982",
   storageBucket: "mobil-web-8b982.appspot.com",
   messagingSenderId: "294788477721",
   appId: "1:294788477721:web:6a67c4b1728699f3"
 };
 // Initialize Firebase


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//db.settings({timestampsInSapshots: true});
