// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBVVOZ1qECCpEAYbqtY2n0tTRgHXTRSiYo",
  authDomain: "farm-metrics-a48d3.firebaseapp.com",
  projectId: "farm-metrics-a48d3",
  storageBucket: "farm-metrics-a48d3.firebasestorage.app",
  messagingSenderId: "167456631149",
  appId: "1:167456631149:web:e5cd283dc5feb33ecb9264",
  measurementId: "G-J4SR7W9X96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
}