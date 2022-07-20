<template>
  <!-- <h3 class="bg-green text-white">Green Component</h3> -->
  <slot />
</template>
<script>
export default {
  mounted() {
    console.log("Green Mounted");
  },
};
</script>
