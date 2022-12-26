<template>
  <header-component-vue></header-component-vue>
  {{ activeUser }}
  <router-view> </router-view>
</template>

<style></style>
<script>
import headerComponentVue from "@/components/HeaderComponent.vue";
import { onMounted } from "vue";
import store from "./store";
export default {
  components: { headerComponentVue },
  setup() {
    const activeUser = localStorage.getItem("activeUser");
    onMounted(() => {
      store.dispatch("fetchProducts");
    });
    return {
      activeUser,
    };
  },
};
</script>
