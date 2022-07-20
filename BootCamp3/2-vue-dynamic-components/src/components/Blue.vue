<template>
  <h3 class="bg-blue text-white">Blue Component</h3>
  <input type="text" />
</template>
<script>
export default {
  mounted() {
    console.log("Blue Mounted");
  },
  activated() {
    console.log("Blue activated");
  },
  deactivated() {
    console.log("Blue deactivated");
  },
};
</script>

keep alive kullanıldığı için hem life cycle hook (activated ve deactivated)
kullanılabilir hem de state bilgisi korunmuş olur.
