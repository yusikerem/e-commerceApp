import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt44FuzhiucMC2zl_gq_vx5lPdiCw2efE",
  authDomain: "e-commerceapp-facf9.firebaseapp.com",
  projectId: "e-commerceapp-facf9",
  storageBucket: "e-commerceapp-facf9.appspot.com",
  messagingSenderId: "770497367912",
  appId: "1:770497367912:web:a164c81be06fb10b4e10dd",
  measurementId: "G-R1RW86FMJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(store).use(analytics).use(router).mount("#app");
