import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({

apiKey: "AIzaSyA4Wuh9hhjqELe31LNBTnaid2Hev-m_b-8",
authDomain: "reactproject-63606.firebaseapp.com",
projectId: "reactproject-63606",
storageBucket: "reactproject-63606.appspot.com",
messagingSenderId: "722789666457",
appId: "1:722789666457:web:07ecbf7f9312066b6bb208"

});
// Firebase storage reference
const storage = getStorage(app);
export default storage;