// Import the initializeApp Function
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9oR4YcqJpIddNukBBVSF4uKZT6ffWh6U",
  authDomain: "bitcafe-restaurant.firebaseapp.com",
  projectId: "bitcafe-restaurant",
  storageBucket: "bitcafe-restaurant.appspot.com",
  messagingSenderId: "643088385117",
  appId: "1:643088385117:web:889558967ee675b56279b4",
};

// Initialize Firebase
export const firebaseInitialize = () => {
  return initializeApp(firebaseConfig);
};

