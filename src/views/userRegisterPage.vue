<template>
  <register-page-component
    :pageDetails="{ type: 'user', imgSrc: 'Buy.svg' }"
  ></register-page-component>
</template>
<script>
import registerPageComponent from "@/components/RegisterPageComponent.vue";
export default {
  components: { registerPageComponent },
};
</script>
