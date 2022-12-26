<template>
  <login-page-component
    :pageDetails="{ type: 'seller', imgSrc: 'Group.svg' }"
  ></login-page-component>
</template>
<script>
import loginPageComponent from "@/components/LoginPageComponent.vue";
export default {
  components: { loginPageComponent },
};
</script>
