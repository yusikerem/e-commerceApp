<template>
  <section class="custom-container">
    <button class="fixed right-4 bottom-4 border p-2 rounded-full">
      <img
        width="25"
        height="45"
        src="../assets/right-arrow-svgrepo-com.svg"
        class="rotate-[270deg]"
        alt=""
      />
    </button>
    <div class="flex justify-between mb-4">
      <span>Listing 2323 results for "Kinetix" search.</span>
      <select class="capitalize p-2 font-light text-sm" name="" id="">
        <option value="popular">popular</option>
        <option value="lowToHigh">price: low to high</option>
        <option value="HighToLow">price: high to low</option>
        <option value="newest">newest</option>
      </select>
    </div>
    <div class="flex flex-wrap gap-3">
      <product-component
        v-for="(product, i) in this.$store.getters.getAllProducts"
        :key="i"
        :name="product.name"
        :price="product.price"
        :url="product.imgUrl"
      >
      </product-component>
    </div>
  </section>
</template>
<script>
// import store from "@/store";

import productComponent from "./ProductComponent.vue";

export default {
  components: { productComponent },
};
</script>
