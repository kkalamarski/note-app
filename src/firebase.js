import Vue from 'vue';
import firebase from 'firebase';
import VueFire from 'vuefire'

Vue.use(VueFire)

const config = {
  apiKey: "AIzaSyAwR-GCoTfpYQEb0seu4kjQownQhsWRchQ",
  authDomain: "self-note.firebaseapp.com",
  databaseURL: "https://self-note.firebaseio.com",
  projectId: "self-note",
  storageBucket: "self-note.appspot.com",
  messagingSenderId: "675545003854"
};

firebase.initializeApp(config);
const settings = { timestampsInSnapshots: true };

const db = firebase.firestore()
db.settings(settings);

export { db }

export const auth = firebase.auth()
export default firebase