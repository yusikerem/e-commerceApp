<template>
  <div class="p-4 flex border border-white w-80">
    <img
      class="mr-5 w-5 h-5"
      :src="require(`../assets/${content.imgSrc}`)"
      alt=""
    />
    <input
      @keyup="$emit('inputValue', input)"
      :placeholder="content.placeholder.toUpperCase()"
      v-model="input"
      class="bg-transparent placeholder:text-white tracking-wider outline-none"
      :type="type"
    />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: {
    type: {
      default: "text",
    },
    content: {},
  },
  setup() {
    let input = ref("");
    return {
      input,
    };
  },
};
</script>
