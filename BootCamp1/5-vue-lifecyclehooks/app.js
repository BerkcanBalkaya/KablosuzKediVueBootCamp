const app = Vue.createApp({
    data(){
        return {
            title: "metotlar",
            itemList: [],
        };
    },
    beforeCreate(){
        console.log("beforeCreate Çalıştı");
    },
    created(){
        console.log("created Çalıştı");
        setTimeout(() => {
            this.itemList =[1, 2, 3, 4, 5, 6, 7, 8];
        }, 2000);
    },
    beforeMount(){
        console.log("beforeMount Çalıştı");
    },
    mounted(){
        console.log("mounted Çalıştı");
    },
    beforeUpdate(){
        console.log("beforeUpdate Çalıştı");
    },
    updated(){
        console.log("updated Çalıştı");
    },
    beforeUnmount(){
        console.log("beforeUnmount Çalıştı");
    },
    unmounted(){
        console.log("unmounted Çalıştı");
    },
}).mount("#app");

// setTimeout(() => {
//     app.unmount();
// }, 6000);
// Bilgi değiştiği zaman beforeUpdate ve updated çalışır
// Eğer bir elemente erişilecekse created da değil mounteddan sonra yapmamız lazım çünkü daha dom oluşmamız durumdadır.