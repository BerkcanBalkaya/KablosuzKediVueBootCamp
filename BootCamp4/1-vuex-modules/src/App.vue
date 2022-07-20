<template>
  <p>{{ $store.state.mainName }}</p>
  <p>{{ $store.state.musteri.contactName }}</p>
</template>

<script>
export default {
  name: "App",
  // 2 adet fonksiyon var mutation içerisinde setItem için
  created() {
    console.log("this.$store :>> ", this.$store);
  },
};
</script>
