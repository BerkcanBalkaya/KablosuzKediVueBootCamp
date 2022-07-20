<template>
  <button @click="updateName">Yeni item ekle ..</button>
</template>
<script>
export default {
  methods: {
    updateName() {
      const userData = {
        id: new Date().getTime(),
        title: "Raf" + new Date().getTime(),
        type: "Mobilya",
      };
      //Store içerisindeki mutationa commit ile gönderdiğimiz için ve orada değişim gerçekleştirileceği için aşağıdaki push tarafı artık gerekmemektedir.
      //   this.$store.commit("newItem",userData);
      //mutationlar commit edilir actionlar dispatch edilir.
      this.$store.dispatch("newItem", userData);
      //   this.$store.state.fullName = "Batuhan Balkaya";
      // Bu tarafta push yaptığımızda store.js tarafında getters otomatik olarak tekrar çalışıyor ve filtreleme işini yapıp woodItems'ı geri döndürüyor yani reactif
      //   this.$store.state.itemList.push({
      //     id: new Date().getTime(),
      //     title: "Raf" + new Date().getTime(),
      //     type: "Mobilya",
      //   });
    },
  },
};
</script>
