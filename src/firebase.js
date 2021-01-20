// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDuREvW0szbpXq8uKxeMN6tQkFXUf5rhfQ",
  authDomain: "clone-ffb62.firebaseapp.com",
  projectId: "clone-ffb62",
  storageBucket: "clone-ffb62.appspot.com",
  messagingSenderId: "124594830570",
  appId: "1:124594830570:web:59b5e964dd1c47c9186b93",
  measurementId: "G-PNQTCF32SG"
};

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };