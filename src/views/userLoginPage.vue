<template>
  <login-page-component
    :pageDetails="{ type: 'user', imgSrc: 'Buy.svg' }"
  ></login-page-component>
</template>
<script>
import loginPageComponent from "@/components/LoginPageComponent.vue";
export default {
  components: { loginPageComponent },
};
</script>
