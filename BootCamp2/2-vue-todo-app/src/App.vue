<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2" />
    <!-- childdan parenta gelen bilgi burada add-todo ile geliyor addSectiondan emit kullanılarak-->
    <!-- Aşağıda aynı zamanda :addNewTodo ile metodumuzu props olarak gönderip child kısmında da çalışmasını sağlayabiliyoruz. -->
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <TodoList @delete-item="deleteItem" :myData="todoList" />
    <!-- Burada mesela childa itemCount olarak bindlamışız. Child tarafında bunu props olarak yakalayarak kullanabiliyoruz. -->
    <!-- <ResultBar :itemCount="todoList.length" /> -->

    <!-- Burada da araya ListSection koyuyoruz daha derin child parent ilişkilerini simüle edebilmek için bu durumlarda provide inject kullanılması daha iyi olur. -->
    <ListSection />
  </div>
</template>

<script>
import ListSection from "@/components/ListSection";
import TodoList from "@/components/TodoList";
import AddSection from "@/components/AddSection";
// import ResultBar from "@/components/ResultBar";
export default {
  components: {
    // ResultBar,
    ListSection,
    TodoList,
    AddSection,
  },
  // created() {
  //   setTimeout(() => {
  //     console.log("selamlar");
  //     this.todoList = [
  //       { id: 1, text: "Bootcamp 2.1" },
  //       { id: 2, text: "Bootcamp 2.2" },
  //       { id: 3, text: "Bootcamp 2.3" },
  //       { id: 4, text: "Bootcamp 2.4" },
  //       { id: 5, text: "Bootcamp 2.5" },
  //     ];
  //   }, 2000);
  // },
  data() {
    // Mesela burada provideData oluşturmamızın sebebi normalde todoListi içine koyarak provide etmemizi sağlamaktı Çünkü eğer böyle yapmazsak dinamik elementlerde provide ettikten ve
    // inject ile yakaladıktan sonra elimizdeki değeri değiştirirsek inject ile yakalanan yerde değişim olmaz.
    return {
      todoList: [
        { id: 1, text: "Bootcamp 2.1" },
        { id: 2, text: "Bootcamp 2.2" },
        { id: 3, text: "Bootcamp 2.3" },
        { id: 4, text: "Bootcamp 2.4" },
        { id: 5, text: "Bootcamp 2.5" },
      ],
      provideData: {
        todoListt: [
          { id: 1, text: "Bootcamp 2.1" },
          { id: 2, text: "Bootcamp 2.2" },
          { id: 3, text: "Bootcamp 2.3" },
          { id: 4, text: "Bootcamp 2.4" },
          { id: 5, text: "Bootcamp 2.5" },
        ],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
    };
  },
  methods: {
    deleteItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((t) => t != todoItem);
    },
    addNewTodo(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
    },
    testEvent(data) {
      alert(data);
    },
  },
};
</script>
// provide ve inject kısımları çalıştırılamadı bir sonraki haftada tekrarına bakılacak ve burada çözmeyi unutma
