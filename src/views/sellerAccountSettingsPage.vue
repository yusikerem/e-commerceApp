<template>
  <section class="custom-container py-7 px-14">
    {{ fileInput }}
    <h2 class="custom-header">Add a Product</h2>
    <div class="flex gap-x-10">
      <form class="w-[402px] h-[500px]" action="">
        <img
          id="preview"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
          class="w-full h-full mb-4 bg-secondaryGray border rounded-xl p-2"
          alt=""
        />
        <div class="flex items-center flex-col gap-y-3">
          <input
            id="fileInput"
            accept="image/*"
            v-on:change="test()"
            type="file"
          />
          <button class="bg-secondaryGray text-white text-sm p-3 w-max">
            Upload the image
          </button>
        </div>
      </form>
      <div class="space-y-4 flex justify-center flex-col">
        <div class="space-y-2">
          <h4>Product Name:</h4>
          <input
            v-model="productName"
            type="text"
            class="p-3 w-96 bg-gray-200 rounded-md"
          />
        </div>
        <div class="space-y-2">
          <h4>Category:</h4>
          <select v-model="productCategory" class="p-2" name="" id="">
            <option value="technology">Technology</option>
            <option value="home">Home</option>
            <option value="garden">Garden</option>
          </select>
        </div>
        <div class="space-y-2">
          <h4>Description:</h4>
          <textarea
            v-model="productDescription"
            class="p-3 bg-gray-200 rounded-md resize-none"
            name=""
            id=""
            cols="35"
            rows="10"
          ></textarea>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col space-y-2">
            <h4>Price:</h4>
            <input
              v-model="productPrice"
              type="number"
              class="p-3 w-44 bg-gray-200 rounded-md mb-2"
            />
            <div class="flex items-center">
              <input
                v-model="isShipIncluded"
                class="mr-1"
                id="ship"
                type="checkbox"
              />
              <label class="text-sm" for="ship"
                >Price includes ship cost.</label
              >
            </div>
          </div>
          <div class="space-y-2">
            <h4>Number of Stocks:</h4>
            <input
              v-model="numberOfStocks"
              type="number"
              class="p-3 w-44 bg-gray-200 rounded-md"
            />
          </div>
        </div>
        <button
          @click="addProduct"
          class="p-8 bg-green-500 rounded-md mx-autos"
        >
          Add new Product
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
export default {
  setup() {
    let productName = ref("");
    let productCategory = ref("");
    let productDescription = ref("");
    let productPrice = ref("");
    let numberOfStocks = ref("");
    let isShipIncluded = ref(false);
    // let productImage = ref("");
    function test() {
      const reader = new FileReader();
      let files = document.getElementById("fileInput").files;
      reader.onload = async (event) => {
        console.log(event.target.result);
        document
          .getElementById("preview")
          .setAttribute("src", event.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
    function addProduct() {
      if (
        productName.value.trim() !== "" &&
        productCategory.value.trim() !== "" &&
        productDescription.value.trim() !== "" &&
        productPrice.value.trim() !== "" &&
        numberOfStocks.value.trim() !== ""
      ) {
        store.dispatch("addProduct", {
          productName: productName.value,
          productCategory: productCategory.value,
          productDescription: productDescription.value,
          productPrice: productPrice.value,
          numberOfStocks: numberOfStocks.value,
          isShipIncluded: isShipIncluded.value,
        });
      } else {
        alert("Fill al the blanks");
      }
    }

    return {
      test,
      productCategory,
      productDescription,
      productName,
      productPrice,
      numberOfStocks,
      isShipIncluded,
      addProduct,
    };
  },
};
</script>
