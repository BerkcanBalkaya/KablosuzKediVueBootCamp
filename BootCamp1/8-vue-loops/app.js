const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Berkcan bootcamp 1", completed: false },
        { id: 2, text: "Berkcan bootcamp 2", completed: false },
        { id: 3, text: "Berkcan bootcamp 3", completed: false },
        { id: 4, text: "Berkcan bootcamp 4", completed: false },
        { id: 5, text: "Berkcan bootcamp 5", completed: false },
        { id: 6, text: "Berkcan bootcamp 6", completed: false },
        { id: 7, text: "Berkcan bootcamp 7", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      // this.todoList.push(event.target.value);
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((todo) => todo != todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");

// Hatırlatma olarak yukarıdaki counterBoxclass return içerisindeki koşulu direk olarak :class içerisine yazarak da kullanabiliriz.
// Eğer animasyon kullanarak v-for kullanırsak vue.js kesin konumunu bilmediğinden bir element sildiğimiz zaman kafasına göre siler görselde arka tarafta ise doğruyu siler
// Eğer silmeye devam edersek ise arka tarafta tüm kayıtları silebiliriz bunu engellemek için :key=todo.id denmesi gerekir.
