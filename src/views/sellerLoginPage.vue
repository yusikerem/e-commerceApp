<template>
  <login-page-component
    :pageDetails="{ type: 'seller', imgSrc: 'Group.svg' }"
  ></login-page-component>
</template>
<script>
import loginPageComponent from "@/components/loginPageComponent.vue";
export default {
  components: { loginPageComponent },
};
</script>
