const app = Vue.createApp({
    data(){
        return {
            todoText: null,
            todoList: [],
        };
    },
    methods : {
        addTodo(){
            this.todoList.push(this.todoText);
        },
    },
}).mount("#app");

//Sürdürülebilirlik olarak daha kolay 
//DOM manipülasyonunu teker teker yapmak yerine vuejs bizim için bunu otomatik olarak yapıyor ikisi arasındaki fark bu.
