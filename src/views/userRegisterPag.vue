<template>
  <section
    class="container mx-auto justify-center max-w-[1440px] py-36 px-128 bg-primaryGray space-y-12 flex flex-col items-center"
  >
    <h3 class="md:text-4xl text-2xl w-max text-white">User Register Page</h3>

    <img
      width="124"
      h="102"
      class="min-w-[124px] h-[102px]"
      src="../assets/Group.svg"
      alt=""
      @click="test"
    />
    <div class="placeholder:text-sm text-white space-y-6">
      <input-component
        @inputValue="email = $event"
        :content="{ imgSrc: 'user.png', placeholder: 'user e-mail' }"
      ></input-component>
      <input-component
        @inputValue="nickname = $event"
        :content="{ imgSrc: 'user.png', placeholder: 'nickname' }"
      ></input-component>
      <input-component
        @inputValue="password = $event"
        type="password"
        :content="{ imgSrc: 'lock.png', placeholder: 'password' }"
      ></input-component>
    </div>
    <div class="text-white space-x-3 w-80">
      <input id="agree" type="checkbox" v-model="agree" />
      <label for="agree">Agree to Condition's of use and Privacy Notes.</label>
    </div>
    <button-component
      @click="createUserAccount"
      :content="{ text: 'register' }"
    >
    </button-component>
  </section>
</template>
<script>
import inputComponent from "@/components/CustomInput.vue";
import buttonComponent from "@/components/CustomButton.vue";
import store from "@/store";
import { ref } from "vue";

export default {
  components: { inputComponent, buttonComponent },
  setup() {
    let email = ref("");
    let password = ref("");
    let nickname = ref("");
    let agree = ref(false);
    // let val = {
    //   type: "user",
    //   email: email.value,
    //   password: password.value,
    //   nickname: nickname.value,
    // };
    function test() {}
    function createUserAccount() {
      if (agree.value == false) {
        alert("You have to confirm agreement to sign up");
      } else {
        if (
          email.value.trim() !== "" &&
          password.value.trim() !== "" &&
          nickname.value.trim() !== ""
        ) {
          store.dispatch("createAccount", {
            type: "user",
            email: email.value,
            password: password.value,
            nickname: nickname.value,
          });
        } else {
          alert("Please fill all the blanks");
        }
      }
    }

    // function createUserAccount() {

    //   const auth = getAuth();
    //   createUserWithEmailAndPassword(auth, email.value, password.value)
    //     .then(() => {
    //       const auth = getAuth();
    //       updateProfile(auth.currentUser, {
    //         displayName: "user" + nickname.value,
    //       });
    //       console.log(auth.currentUser);
    //     })

    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    return {
      email,
      password,
      test,
      createUserAccount,
      nickname,
      agree,
    };
  },
};
</script>
