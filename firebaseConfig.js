import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDbk-Iln0vgimVysmomCbybtervEXtEYoA",
  authDomain: "ifpe-bcb55.firebaseapp.com",
  projectId: "ifpe-bcb55",
  storageBucket: "ifpe-bcb55.appspot.com",
  messagingSenderId: "864885114694",
  appId: "1:864885114694:web:eca00fbb89474edca14747"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

