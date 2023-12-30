import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl5U2QLS7TGPJ9R_NuEs_FNP33vPax5nc",
  authDomain: "way-meeting.firebaseapp.com",
  projectId: "way-meeting",
  storageBucket: "way-meeting.appspot.com",
  messagingSenderId: "50653442851",
  appId: "1:50653442851:web:963594f51e7462ac729296",
  measurementId: "G-V79NT3P6DY",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
