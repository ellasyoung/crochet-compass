import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "crochetcompass.firebaseapp.com",
  projectId: "crochetcompass",
  storageBucket: "crochetcompass.appspot.com",
  messagingSenderId: "465396191825",
  appId: "1:465396191825:web:7ec258e0c2edda30dcde70"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };