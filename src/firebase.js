import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDP97yMYRKA8fH8r7mH2vqmH5zIxXPwHU",
  authDomain: "learning-react-blog-e64f0.firebaseapp.com",
  projectId: "learning-react-blog-e64f0",
  storageBucket: "learning-react-blog-e64f0.appspot.com",
  messagingSenderId: "26080712100",
  appId: "1:26080712100:web:49ced1f9791893b38b9d31",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
