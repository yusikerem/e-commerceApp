<template>
  <div>
    <button
      class="py-4 px-32 w-80 border bg-white text-primaryGray hover:border-black"
    >
      {{ content.text.toUpperCase() }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["content"],
};
</script>
