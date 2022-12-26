import { createStore } from "vuex";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref as stRef, getDownloadURL } from "firebase/storage";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "@/firebase/index";
import { storage } from "@/firebase/index";

// import { collection, addDoc } from " firebase/firestore";
// import { filterFarebaseKeys } from "@/utils/utils";
// import { api } from "@/api/api";
// import axios from "axios";

export default createStore({
  state: {
    products: [],
    upLoadedItemId: "",
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
  },
  mutations: {
    addProductLocal(state, payload) {
      alert();
      state.products.push(payload);
    },
  },
  actions: {
    test() {
      alert();
    },
    async createAccount({ state }, payload) {
      state;
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
    async login({ state }, payload) {
      state;
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
    async addProduct({ state }, payload) {
      this.commit("addProductLocal", payload);
      state;
      console.log(payload);
      await addDoc(collection(db, "products"), {
        name: payload.name,
        category: payload.category,
        description: payload.description,
        price: payload.price,
        numberOfStocks: payload.numberOfStocks,
        isShipIncluded: payload.isShipIncluded,
      }).then((resp) => {
        payload.id = resp.id;
        const id = resp.id;
        state.upLoadedItemId = id;
        this.commit("addProductLocal", payload);
        console.log(id);
      });

      // 'users' collection reference

      // axios.post(
      //   "https://e-commerceapp-facf9-default-rtdb.firebaseio.com/products.json",
      //   {
      //     payload,
      //   }
      // );
    },

    async fetchProducts({ state }) {
      // const [error, data] = await api({ method: "get", URL: "/products.json" });
      // let allProducts = data;
      // allProducts = filterFarebaseKeys(allProducts);
      // state.products = allProducts;
      // console.log(state.products);
      // return error;

      //firestore not real time
      onSnapshot(collection(db, "products"), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const pdt = doc.data();
          pdt.id = doc.id;
          this.dispatch("fetchProductImg", doc.id).then((url) => {
            pdt.imgUrl = url;
          });
          state.products.push(pdt);
        });
      });

      // const citiesCol = collection(db, "products");

      // const citySnapshot = await getDocs(citiesCol);
      // const cityList = citySnapshot.docs.map((doc) => doc.data());
      // console.log(cityList);

      state;
      // const querySnapshot = await getDocs(collection(db, "products"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });

      // axios
      //   .get(
      //     "https://e-commerceapp-facf9-default-rtdb.firebaseio.com/products.json"
      //   )
      //   .then((resp) => {
      //     state;
      //     let allProducts = resp.data;
      //     allProducts = filterFarebaseKeys(allProducts);
      //     console.log(allProducts);
      //   });
    },
    async fetchProductImg({ state }, payload) {
      state;
      let imgUrl = "";
      await getDownloadURL(stRef(storage, `products/${payload}/`)).then(
        (url) => {
          console.log(url);
          imgUrl = url;
        }
      );
      return imgUrl;
    },
  },
  modules: {},
});
