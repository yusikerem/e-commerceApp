import { createStore } from "vuex";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    test() {
      alert();
    },
    async createAccount({ store }, payload) {
      store;
      console.log(
        payload.type,
        payload.email,
        payload.password,
        payload.nickname
      );
      const auth = getAuth();
      await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      )
        .then(() => {
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: payload.type + payload.nickname,
          });
          console.log(auth.currentUser);
          localStorage.setItem("activeUser", payload.email);
          localStorage.setItem("nickname", payload.nickname);
        })

        .catch((error) => {
          console.log(error);
        });
    },
    async login({ store }, payload) {
      store;
      alert(payload.email, payload.password);
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          localStorage.setItem("activeUser", payload.email);
          localStorage.setItem("nickname", payload.nickname);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
        });
    },
    addProduct({ store }, payload) {
      store;
      console.log(payload);
      axios.post(
        "https://e-commerceapp-facf9-default-rtdb.firebaseio.com/products.json",
        {
          payload,
        }
      );
    },
  },
  modules: {},
});
