<template>
  <p>{{ $store.state.mainName }}</p>
  <p>{{ $store.state.musteri.contactName }}</p>
  <pre>{{ musteriADI }}</pre>
</template>

<script>
// Obje syntaxı
import { mapGetters } from "vuex";
export default {
  name: "App",
  // 2 adet fonksiyon var mutation içerisinde setItem için
  created() {
    console.log("this.$store :>> ", this.$store);
    // namespace true dendiği zaman yukarıdaki gibi değil aşağıdaki gibi çağrı yapılır.
    console.log("this.$store :>> ", this.$store.getters["musteri/_contactName"]);
  },
  // Computed altında obje syntaxı ile çağırma
  computed: {
    ...mapGetters({
      musteriADI: "musteri/_contactName",
    }),
  },
};
</script>
