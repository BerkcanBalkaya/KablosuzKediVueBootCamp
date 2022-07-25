<template>
  <!-- route içerisinde param olsun query olsun çok fazla bilgiye erişebiliriz bunları kullanacağız. -->
  <p>{{ $route.params.userID }}</p>
  <h1>Açıklamalar burada</h1>
  <button @click="goBack">Geri Dön</button>
</template>
<script>
export default {
  created() {
    console.log(this.$route);
  },
  //   Geçişler için birinci yöntem metod içeriindeki goBack metodu
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
