const app = Vue.createApp({
  data() {
    return {
      showContainer: false,
      counter: 0,
    };
  },
  computed: {
    counterBoxClass() {
      return { "bg-success text-white": this.counter > 0, "bg-danger text-white": this.counter < 0 };
    },
  },
}).mount("#app");

// Hatırlatma olarak yukarıdaki counterBoxclass return içerisindeki koşulu direk olarak :class içerisine yazarak da kullanabiliriz.
