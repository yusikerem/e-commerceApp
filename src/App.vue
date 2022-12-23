<template>
  <header-component-vue></header-component-vue>
  {{ activeUser }}
  <router-view> </router-view>
</template>

<style></style>
<script>
import headerComponentVue from "@/components/headerComponent.vue";

export default {
  components: { headerComponentVue },
  setup() {
    const activeUser = localStorage.getItem("activeUser");

    return {
      activeUser,
    };
  },
};
</script>
