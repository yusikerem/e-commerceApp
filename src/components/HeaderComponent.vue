<template>
  <header class="custom-container bg-[#F1F1F1]">
    <div class="px-12 py-4 space-y-4">
      <div class="hidden md:flex justify-between">
        <button>
          <a class="text-4xl" href="/"> KEREMYOL </a>
        </button>

        <div class="max-w-[320px] w-[40%]">
          <custom-input
            :content="{
              imgSrc: 'Search.svg',
              placeholder: 'Type to search...',
            }"
            imageOrder="right"
            class="text-white border border-secondGray rounded-lg bg-secondaryGray"
          >
          </custom-input>
          <ul class="absolute p-4 bg-gray-300 max-w-[320px] w-[40%]">
            <li class="border-b w-full">saasdsadsa</li>
            <li class="border-b">sa</li>
            <li class="border-b">sa</li>
            <li class="border-b">sa</li>
          </ul>
        </div>
        <div class="flex space-x-5">
          <button class="px-4 py-2 bg-secondaryGray rounded-lg">
            <router-link to="/sellerPage">
              <img
                width="36"
                height="36"
                src="../assets/Profile.png"
                class=""
                alt=""
              />
            </router-link>
          </button>
          <button class="px-4 py-2 bg-secondaryGray rounded-lg">
            <a href="">
              <img
                width="36"
                height="36"
                src="../assets/heart-fill-white.svg"
                class="fill-white"
                alt=""
              />
            </a>
          </button>

          <button class="px-4 py-2 bg-secondaryGray rounded-lg">
            <a href="">
              <img
                width="36"
                height="36"
                src="../assets/Buy.svg"
                class=""
                alt=""
              />
            </a>
          </button>
        </div>
      </div>
      <ul class="justify-between hidden md:flex">
        <li class="">
          <a class="header-a" href="">Technology</a>
        </li>
        <li>
          <a class="header-a" href="">Home</a>
        </li>
        <li>
          <a class="header-a" href="">Garden</a>
        </li>
        <li>
          <a class="header-a" href="">Kitchen</a>
        </li>
        <li>
          <a class="header-a" href="">Technology</a>
        </li>
        <li>
          <a class="header-a" href="">Technology</a>
        </li>
      </ul>
    </div>
    <div class="flex justify-between gap-x-6 relative">
      <button>
        <a href="">
          <img
            width="140"
            height="50"
            src=""
            class="bg-gray-200 block md:hidden"
            alt="logo"
          />
        </a>
      </button>
      <custom-input
        :content="{ imgSrc: 'Search.svg', placeholder: 'Type to search...' }"
        class="bg-secondaryGray md:hidden"
        imageOrder="right"
      ></custom-input>
      <button @click="isHeaderActive = !isHeaderActive">
        <img
          src="../assets/options-lines-svgrepo-com.svg"
          class="block md:hidden w-8 h-8"
          alt=""
        />
      </button>

      <div
        v-if="isHeaderActive"
        class="h-screen rounded-b-md flex md:hidden absolute top-[60px] bg-secondaryGray w-3/4 right-0 flex-col"
      >
        <button
          class="px-4 py-2 bg-secondaryGray rounded-lg border-b border-white"
        >
          <a href="">
            <img
              width="36"
              height="36"
              src="../assets/Profile.png"
              class=""
              alt=""
            />
          </a>
        </button>
        <button
          class="px-4 py-2 bg-secondaryGray rounded-lg border-b border-white"
        >
          <a href="">
            <img
              width="36"
              height="36"
              src="../assets/heart-fill-white.svg"
              class="fill-white"
              alt=""
            />
          </a>
        </button>

        <button
          class="px-4 py-2 bg-secondaryGray rounded-lg border-b border-white"
        >
          <a href="">
            <img
              width="36"
              height="36"
              src="../assets/Buy.svg"
              class=""
              alt=""
            />
          </a>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import customInput from "./CustomInput.vue";
import { ref } from "vue";
export default {
  components: { customInput },
  setup() {
    let isHeaderActive = ref(false);
    return {
      isHeaderActive,
    };
  },
};
</script>
<style scoped>
.header-a {
  box-shadow: inset 0 0 0 0 #4f4f4f;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.header-a:hover {
  box-shadow: inset 100px 0 0 0 #4f4f4f;
  color: white;
}
</style>
