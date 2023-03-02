import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD017eh_l3uPb0k5eDQMP1dPwsZBS5F2Zo",
  authDomain: "react-netflix-clone-59b88.firebaseapp.com",
  projectId: "react-netflix-clone-59b88",
  storageBucket: "react-netflix-clone-59b88.appspot.com",
  messagingSenderId: "1012497837151",
  appId: "1:1012497837151:web:b4b7f1e798076688f83fea",
  measurementId: "G-NXY1HCT3F7"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);