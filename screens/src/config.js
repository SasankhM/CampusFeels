import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyBt5i1y5BUUiq00AmCRlrJpnDVDmcb1FZs",
  authDomain: "campusfeels-b28b1.firebaseapp.com",
  databaseURL: "https://campusfeels-b28b1.firebaseio.com",
  projectId: "campusfeels-b28b1",
  storageBucket: "campusfeels-b28b1.appspot.com",
  messagingSenderId: "503969375270"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
