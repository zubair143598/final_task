import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS_dbihmGBy8ILHbmkuuoE_FXu1Y8gmCU",
  authDomain: "metamask-baf96.firebaseapp.com",
  projectId: "metamask-baf96",
  storageBucket: "metamask-baf96.appspot.com",
  messagingSenderId: "112400246606",
  appId: "1:112400246606:web:fc6865e00a27cb4de1e01f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);