import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZbxj8C3XSMT6PzQ5fQa0NvJDu8LHrsTc",
  authDomain: "fir-ui-auth-76c12.firebaseapp.com",
  databaseURL: "https://fir-ui-auth-76c12.firebaseio.com",
  projectId: "fir-ui-auth-76c12",
  storageBucket: "",
  messagingSenderId: "1052984360912",
  appId: "1:1052984360912:web:a227db2a5201155e"
}
firebase.initializeApp(config);
export default firebase;