// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken} from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// export const generateToken = async () => {
//     const permission = await Notification.requestPermission();
//     if(permission === "granted" ){
//         const token = await getToken(messaging, {
//             vapidKey: "BCFmALnYGz8M2jigNEv0qvgZY9Zx2DV9FH8kgQ6sGCjgfWfqvMEg-nWZiwIvepLKof-s01Eauns_y7E93Uzef0s"
//         });
//         console.log(token);

//     }
//     console.log(permission);
// }