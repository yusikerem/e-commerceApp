<template>
  <header class="custom-container bg-[#F1F1F1] min-w-min">
    <div class="px-12 py-4 space-y-4">
      <div class="space-x-28 hidden md:flex">
        <button>
          <a href="">
            <img
              width="140"
              height="50"
              src=""
              class="bg-gray-200"
              alt="logo"
            />
          </a>
        </button>

        <div class="flex space-x-5">
          <custom-input
            :content="{
              imgSrc: 'Search.svg',
              placeholder: 'Type to search...',
            }"
            imageOrder="right"
            class="w-[800px] text-white border border-secondGray rounded-lg bg-secondaryGray"
          >
          </custom-input>

          <button class="px-4 py-2 bg-secondaryGray rounded-lg">
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
import customInput from "./customInput.vue";
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
