<template>
  <div class="relative max-h-[300px]">
    <div class="max-w-[1000px] relative m-auto">
      <div class="mySlides fade">
        <span class="bg-[#f2f2f2] text-xs py-2 px-3 absolute top-0">1/3</span>
        <img src="@/assets/heart-icon.svg" class="w-[90%] mx-auto" alt="" />
      </div>
      <div class="none mySlides fade">
        <span class="bg-[#f2f2f2] text-xs py-2 px-3 absolute top-0">2/3</span>
        <img src="" alt="" />
      </div>
      <div class="none mySlides fade">
        <span class="bg-[#f2f2f2] text-xs py-2 px-3 absolute top-0">3/3</span>
        <img src="" alt="" />
      </div>
      <button
        class="hover:bg-[rgba(0,0,0,0.8)] text-black cursor-pointer absolute top-[50%] rounded-r-[3px] w-auto mt-[-22px] p-4 first-letter: font-bold text-lg ease-in duration-500 transition"
        @click="plusSlides(-1)"
      >
        &#10094;
      </button>
      <button
        class="right-0 hover:bg-[rgba(0,0,0,0.8)] text-black cursor-pointer absolute top-[50%] rounded-r-[3px] w-auto mt-[-22px] p-4 font-bold text-lg ease-in duration-500 transition"
        @click="plusSlides(1)"
      >
        &#10095;
      </button>
    </div>
    <br />
    <div class="flex absolute bottom-0 left-[40%]">
      <span
        class="cursor-pointer w-4 h-4 mx-0.5 bg-[#bbb] rounded-full inline-block dot"
        @click="currentSlide(1)"
      ></span>
      <span
        class="cursor-pointer w-4 h-4 mx-0.5 bg-[#bbb] rounded-full inline-block dot"
        @click="currentSlide(2)"
      ></span>
      <span
        class="cursor-pointer w-4 h-4 mx-0.5 bg-[#bbb] rounded-full inline-block dot"
        @click="currentSlide(3)"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    // let slideIndex = 1;
    // showSlides(slideIndex);

    // Next/previous controls
    function plusSlides() {
      //   showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide() {
      //   showSlides((slideIndex = n));
    }

    // function showSlides(n) {
    //   let i;
    //   let slides = document.getElementsByClassName("mySlides");
    //   console.log(slides[1]);
    //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {
    //     slideIndex = 1;
    //   }
    //   if (n < 1) {
    //     slideIndex = slides.length;
    //   }
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex - 1].className += " active";
    // }
    return {
      plusSlides,
      currentSlide,
    };
  },
};
</script>
<style scoped>
.dot {
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
