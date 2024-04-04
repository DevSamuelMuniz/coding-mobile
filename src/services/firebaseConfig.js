import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9gdrjQ9hozW5PAHFhx17F--w4KJVNg-o",
  authDomain: "finamo-auth.firebaseapp.com",
  projectId: "finamo-auth",
  storageBucket: "finamo-auth.appspot.com",
  messagingSenderId: "958662275892",
  appId: "1:958662275892:web:2ca24b36ed1b2c91896b61"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);