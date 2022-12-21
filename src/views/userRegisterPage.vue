<template>
  <register-page-component
    :pageDetails="{ type: 'user', imgSrc: 'Buy.svg' }"
  ></register-page-component>
</template>
<script>
import registerPageComponent from "@/components/registerPageComponent.vue";
export default {
  components: { registerPageComponent },
};
</script>
