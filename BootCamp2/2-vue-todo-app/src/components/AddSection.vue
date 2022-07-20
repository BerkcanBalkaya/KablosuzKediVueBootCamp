<template>
  <label for="todoText"></label>
  <!-- Alt kısımda hali hazırda bulunan bir addNewTodo metodu ile parenta emit yapılıyor bilgi ve parent içerisinde kullanılması sağlanıyor -->
  <!-- <input v-model="todoText" @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız" /> -->
  <!-- Altta ise parenttan bize gelen metoda kendi içimizdeki veriyi ekleyerek child tarafında eleman eklemesi gerçekleştiriliyor. -->
  <input v-model="todoText" @keydown.enter="addNewTodo(todoText)" type="text" id="todoText" placeholder="Bir şeyler yazınız" />
</template>
<script>
export default {
  //Burada da method olarak parenttan metodu alıp onu kullanmayı gösteriyoruz
  props: {
    addNewTodo: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      todoText: null,
    };
  },
  methods: {
    // addNewTodo() {
    //   this.$emit("add-todo", this.todoText);
    //   this.todoText = null;
    // },
  },
};
</script>
