import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMWeTj2vI05C1dWoMfRB9aG6eqi0OVDfY",
  authDomain: "apartments-app-a74ce.firebaseapp.com",
  projectId: "apartments-app-a74ce",
  storageBucket: "apartments-app-a74ce.appspot.com",
  messagingSenderId: "809382148267",
  appId: "1:809382148267:web:7db9ca8e504bf339909fee",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
