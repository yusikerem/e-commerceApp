<template>
  <section class="custom-container py-7 px-2 lg:px-14">
    <h2 class="custom-header">Add a Product</h2>
    <div class="md:flex gap-x-10">
      <form class="md:w-[402px] w-40 md:h-[500px] mb-4 lg:mb-0" action="">
        <p class="block mb-2">Product Images</p>
        <span class="opacity-50 text-xs" v-if="imagesToUpload.length == 0">
          You haven't uploaded any image yet.
        </span>
        <div
          v-else
          class="max-w-[400px] items-center mb-4 bg-gray-200 p-2 flex gap-x-3 gap-y-2 flex-wrap max-h-[168px] overflow-auto"
        >
          <div
            class="w-20 h-20 bg-secondaryGray p-2 relative z-10"
            :key="i"
            v-for="(img, i) in imagesToUpload"
            :class="{ 'border border-red-400': img.cover == true }"
          >
            <div
              v-if="img.cover"
              class="absolute top-[-12px] left-0 text-center text-xs text-red-500 p-2 w-full h-min"
            >
              Cover
            </div>
            <button
              @click.prevent="removeImage(i)"
              class="bg-red-500 w-4 h-4 rounded-full absolute top-0 right-0 flex items-center justify-center"
            >
              x
            </button>
            <div class="relative">
              <img
                @click="showOnPreview(i)"
                class="w-full h-full"
                :src="img.url"
                alt=""
              />
            </div>
          </div>
        </div>

        <img
          id="preview"
          :src="previewImage"
          class="w-full h-full mb-4 bg-secondaryGray border rounded-xl p-2"
          alt=""
        />
        <div class="flex items-center flex-col gap-y-3">
          <input
            id="fileInput"
            accept="image/*"
            v-on:change="handleInputChange"
            type="file"
            hidden
          />
          <button
            @click.prevent="uploadButton"
            class="bg-secondaryGray text-white text-sm p-3 w-max"
          >
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
            class="p-3 lg:w-96 bg-gray-200 rounded-md"
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
        <div class="space-y-2 relative">
          <h4>Description:</h4>
          <textarea
            v-model="productDescription"
            class="p-3 bg-gray-200 rounded-md resize-none max-w-full"
            name=""
            id=""
            cols="35"
            rows="10"
          ></textarea>
        </div>
        <div class="flex justify-between relative">
          <div class="flex flex-col space-y-2">
            <h4>Price:</h4>
            <input
              v-model="productPrice"
              type="number"
              class="p-3 w-[70%] lg:w-44 bg-gray-200 rounded-md mb-2"
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
              class="p-3 w-[70%] lg:w-44 bg-gray-200 rounded-md"
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
import { storage } from "@/firebase/index";
import {
  ref as stRef,
  // uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
export default {
  setup() {
    const defaultImgUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";
    let productName = ref("");
    let productCategory = ref("");
    let productDescription = ref("");
    let productPrice = ref("");
    let numberOfStocks = ref("");
    let isShipIncluded = ref(false);
    let coverPhoto = ref(0);
    // let uploadImageURL = {};
    let imagesToUpload = ref([]);
    let previewImage = ref(defaultImgUrl);
    // let img;
    // let productImage = ref("");
    function handleInputChange(event) {
      console.log(event.target.files[0]);
      let filex = event.target.files[0];
      console.log(filex);
      // uploadImageURL = event.target.files[0];

      // uploadBytes(storageRef, event.target.files[0]).then((snapshot) => {
      //   const progress =
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   console.log(progress);
      //   console.log("uploaded");
      // });

      const reader = new FileReader();
      let files = document.getElementById("fileInput").files;
      reader.onload = async (event) => {
        previewImage.value = event.target.result;
        console.log(previewImage.value);
        imagesToUpload.value.push({
          cover: coverFnc(),
          url: previewImage.value,
          file: filex,
        });
        console.log(imagesToUpload.value);
      };
      reader.readAsDataURL(files[0]);
    }

    //for make always first photo cover photo
    function coverFnc() {
      if (imagesToUpload.value.length == 0) return true;
      else false;
    }

    // function onUpload(){
    //   img = null;
    //   const storageRef=firebase.s
    // }
    function showOnPreview(i) {
      //set to default all images cover value.
      imagesToUpload.value.forEach((i) => {
        i.cover = false;
      });
      //set cover image.
      coverPhoto.value = i;
      console.log(coverPhoto.value);
      console.log(imagesToUpload.value);
      imagesToUpload.value[i].cover = true;
      previewImage.value = imagesToUpload.value[i].url;
    }
    function removeImage(i) {
      console.log(imagesToUpload.value[i] + "," + previewImage.value);
      if (imagesToUpload.value[i].url == previewImage.value) {
        previewImage.value =
          imagesToUpload.value[imagesToUpload.value.length - 1];
        console.log(previewImage.value);

        // if (
        //   previewImage.value == defaultImgUrl &&
        //   imagesToUpload.value.length > 0
        // ) {
        //   previewImage.value =
        //     imagesToUpload.value[imagesToUpload.value.length - 1];
        // }
      }

      imagesToUpload.value.splice(i, 1);
      if (imagesToUpload.value.length == 0) {
        previewImage.value = defaultImgUrl;
      } else {
        previewImage.value =
          imagesToUpload.value[imagesToUpload.value.length - 1].url;
      }
      console.log(imagesToUpload);
    }

    function addProduct() {
      let filesToUpload = [];
      imagesToUpload.value.forEach((img) => {
        filesToUpload.push(img.file);
      });
      console.log(filesToUpload);

      if (
        productName.value.trim() !== "" &&
        productCategory.value.trim() !== "" &&
        productDescription.value.trim() !== "" &&
        productPrice.value !== "" &&
        numberOfStocks.value !== ""
      ) {
        store
          .dispatch("addProduct", {
            name: productName.value,
            category: productCategory.value,
            description: productDescription.value,
            price: productPrice.value,
            numberOfStocks: numberOfStocks.value,
            isShipIncluded: isShipIncluded.value,
            coverPhoto: coverPhoto.value,
            owner: localStorage.getItem("activeUser"),
            comments: [],
          })
          .then(() => {
            let i = 1;
            filesToUpload.forEach((f) => {
              console.log(i);
              const storageRef = stRef(
                storage,
                `products/${store.state.upLoadedItemId}/${i}`,
                f
              );
              i++;
              const uploadTask = uploadBytesResumable(storageRef, f);
              uploadTask.on("state_changed", (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
              });
            });
          });
        productName.value = "";
        productCategory.value = "";
        productDescription.value = "";
        productPrice.value = "";
        numberOfStocks.value = "";
        isShipIncluded.value = false;
      } else {
        alert("Fill al the blanks");
      }
    }
    function uploadButton() {
      document.getElementById("fileInput").click();
    }

    return {
      productCategory,
      productDescription,
      productName,
      productPrice,
      numberOfStocks,
      isShipIncluded,
      addProduct,
      uploadButton,
      handleInputChange,
      imagesToUpload,
      removeImage,
      previewImage,
      showOnPreview,
    };
  },
};
</script>
