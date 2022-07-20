const app = Vue.createApp({
    data(){
        return {
            search:"",
            itemList: ["elma","armut","kiraz","çilek"],
            // filteredList: [],
        };
    },
    methods: {
        // searchList(){
        //     const filteredList = this.itemList.filter((i) => i.includes(this.search));
        //     this.filteredList = filteredList;
        //     console.log("filteredList :>> ", filteredList);
        // }
    },
    //computed sayesinde methodstaki işlem farklı şekilde de gerçekleştirilebilir.
    //search değiştiği anda reactivity devreye girer computed otomatik olarak çalışır ve filteredList Update olur.
    computed: {
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.search));
        },
    },
}).mount("#app");

//computed kullanacağımız yerlerde data içerisinde property oluşturmamıza gerek yok buradaki filteredList mantığı işte.