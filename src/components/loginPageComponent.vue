<template>
  <section
    class="container mx-auto w-[1440px] py-36 px-128 bg-primaryGray space-y-12 flex flex-col items-center"
  >
    <h3 class="text-4xl text-white capitalize">
      {{ pageDetails.type }} login page
    </h3>

    <img
      class="mx-auto"
      width="124"
      h="102"
      :src="require(`../assets/${pageDetails.imgSrc}`)"
      alt=""
    />
    <div class="placeholder:text-sm text-white space-y-6">
      <input-component
        :content="{ imgSrc: 'user.png', placeholder: 'email' }"
        @inputValue="email = $event"
      ></input-component>
      <input-component
        type="password"
        @inputValue="password = $event"
        :content="{ imgSrc: 'lock.png', placeholder: 'password' }"
      ></input-component>
    </div>
    <button-component @click="login" :content="{ text: 'login' }">
    </button-component>
  </section>
</template>
<script>
import inputComponent from "@/components/customInput.vue";
import buttonComponent from "@/components/customButton.vue";
import store from "@/store";
import { ref } from "vue";
export default {
  props: ["pageDetails"],
  components: { inputComponent, buttonComponent },
  setup(props) {
    let email = ref("");
    let password = ref("");

    function login() {
      store.dispatch("login", {
        type: props.pageDetails.type,
        email: email.value,
        password: password.value,
      });
    }

    return {
      login,
      email,
      password,
    };
  },
};
</script>
