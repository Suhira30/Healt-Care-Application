// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { initializeAuth,getReactNativePersistence ,getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7GsSdSoJGCvNjGeSnQeZrSsupGUPM-4s",
  authDomain: "auth-service-mad.firebaseapp.com",
  projectId: "auth-service-mad",
  storageBucket: "auth-service-mad.firebasestorage.app",
  messagingSenderId: "32603498970",
  appId: "1:32603498970:web:3140a22367d470bc2c38e3"
};

let auth;
if(getApps().length===0){
// Initialize Firebase
const app = initializeApp(firebaseConfig);
auth=initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
}else{
    auth=getAuth();
}


export default auth;
