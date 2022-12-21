<template>
  <register-page-component
    :pageDetails="{ type: 'seller', imgSrc: 'Group.svg' }"
  ></register-page-component>
</template>
<script>
import registerPageComponent from "@/components/registerPageComponent.vue";
export default {
  components: { registerPageComponent },
};
</script>

<!-- <template>
  <section
    class="container mx-auto w-[1440px] py-36 px-128 bg-primaryGray space-y-12 flex flex-col items-center"
  >
    <h3 class="text-4xl text-white">Seller Register Page</h3>

    <img class="mx-auto" width="124" h="102" src="../assets/Group.svg" alt="" />
    <div class="placeholder:text-sm text-white space-y-6">
      <input-component
        :content="{ imgSrc: 'user.png', placeholder: 'seller e-mail' }"
      ></input-component>
      <input-component
        :content="{ imgSrc: 'user.png', placeholder: 'seller name' }"
      ></input-component>
      <input-component
        :content="{ imgSrc: 'lock.png', placeholder: 'password' }"
      ></input-component>
    </div>
    <div class="text-white space-x-3 w-80">
      <input id="agree" type="checkbox" />
      <label for="agree">Agree to Condition's of use and Privacy Notes.</label>
    </div>
    <button-component :content="{ text: 'register' }"> </button-component>
  </section>
</template>
<script>
import inputComponent from "@/components/customInput.vue";
import buttonComponent from "@/components/customButton.vue";
export default {
  components: { inputComponent, buttonComponent },
};
</script> -->
