<template>
  <div class="p-4 flex space-x-5 border border-white w-80">
    <img
      v-if="imageOrder == 'left'"
      class="w-5 h-5"
      :src="require(`../assets/${content.imgSrc}`)"
      alt=""
    />
    <input
      @keyup="$emit('inputValue', input)"
      :placeholder="content.placeholder.toUpperCase()"
      v-model="input"
      class="bg-transparent placeholder:text-white tracking-wider outline-none w-full"
      :type="type"
    />

    <img
      v-if="imageOrder == 'right'"
      class="w-5 h-5"
      :src="require(`../assets/${content.imgSrc}`)"
      alt=""
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
    imageOrder: {
      default: "left",
    },
  },
  setup() {
    let input = ref("");
    return {
      input,
    };
  },
};
</script>
