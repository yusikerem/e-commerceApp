<template>
  <div>
    <div class="p-4 group relative border cursor-pointer mx-auto w-60 h-96">
      <button class="absolute top2 right-2 p-2 bg-gray-100 rounded-full">
        <img
          width="20"
          height="20"
          src="../assets/heart-svgrepo-com.svg"
          alt=""
        />
      </button>
      <div class="w-52 h-72 flex items-center">
        <img
          width="219"
          height="330"
          :src="url"
          alt=""
          class="group-hover:scale-110 z-[-10] relative"
        />
      </div>

      <div>
        <h6 class="font-medium">{{ name }}</h6>
        <div class="flex space-x-1 items-center">
          <img class="w-4 h-4" src="../assets/star-svgrepo-com.svg" alt="" />
          <img class="w-4 h-4" src="../assets/star-svgrepo-com.svg" alt="" />
          <img class="w-4 h-4" src="../assets/star-svgrepo-com.svg" alt="" />
          <img class="w-4 h-4" src="../assets/star-svgrepo-com.svg" alt="" />
          <img class="w-4 h-4" src="../assets/star-svgrepo-com.svg" alt="" />
          <span>(15)</span>
        </div>
        <span> {{ price }} TL </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
};
</script>
