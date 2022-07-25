<template>
  <h1>Home</h1>
  <input type="text" @keydown.enter="goToDetails" placeholder="İlk yöntem" />
  <input type="text" @keydown.enter="goToDetails2" placeholder="İkinci Yöntem" />
</template>
<script>
export default {
  methods: {
    // Geçişler için bir yötem budur
    goToDetails(e) {
      alert(e.target.value);
      this.$router.push(`/detay/${e.target.value}`);
    },
    // Başka bir geçiş yöntemi ise obje göndermektir
    goToDetails2(e) {
      this.$router.push({
        name: "DetailsPage",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "BerkcanBalkaya",
        },
      });
    },
  },
};
</script>
