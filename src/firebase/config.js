import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3Qalt4vwTMBnsZMhU8tUjgKLhMPffM94",
  authDomain: "webmarcosalmendros.firebaseapp.com",
  databaseURL: "https://webmarcosalmendros.firebaseio.com",
  projectId: "webmarcosalmendros",
  storageBucket: "webmarcosalmendros.appspot.com",
  messagingSenderId: "500646056718",
  appId: "1:500646056718:web:0f652455244a92db84fd5f",
  measurementId: "G-GL24WCGKBH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
