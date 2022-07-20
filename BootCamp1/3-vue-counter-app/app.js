const app =Vue.createApp({
    data(){
        return {
            counter: 0,
            counter2: 0,
        };
    },
    methods: {

        // getCounterResult(){
        //     console.log("Counter1 çalıştı");
        //     return this.counter >5 ? 'Büyük' : 'Küçük';
        // },
        // getCounter2Result(){
        //     console.log("Counter2 çalıştı");
        //     return this.counter2 >5 ? 'Büyük' : 'Küçük';
        // },
    },
    // Reactif olarak çalışan yapılar
    // içerisinde kullandığımız verileri kontrol eder değişiklik varsa tetikler bu yüzden methodsdaki gibi her seferinde render yapmamıza sebep olmuyor.
    computed:{

        getCounterResult(){
            console.log("Counter1 çalıştı");
            return this.counter >5 ? 'Büyük' : 'Küçük';
        },
        getCounter2Result(){
            console.log("Counter2 çalıştı");
            return this.counter2 >5 ? 'Büyük' : 'Küçük';
        },
    },
    // direk izleyebilmemizi sağlar
    // tek bir değeri inceler ve eski ile yeni bilgisini bize verir. Her seferinde değer döndürmesi gerekli değildir.
    watch: {
        //Burada mesela datadaki counterı izliyoruz ona göre log yazdırıyoruz.
        counter(newValue, oldValue){
            console.log(oldValue, "=>", newValue);
        },
        // Burada da mesela küçükten büyüğe değişim olunca onları yazıcak.
        getCounterResult(newValue,oldValue){
            console.log(oldValue, "=>", newValue);
        }

    }

}).mount("#app");

// Lifecyclar yüzünden html kısmında hangi butona basarsak basalım her seferinde counter1 ve counter 2 çalıştı yazar
// Bunun sebebi vue instance ve DOM arasında virtual dom olması ve virtual dom ile dom arasında kıyaslama yapılarak tekrardan render etmesi bu sebepte ötürü her renderda tekrar yazıyor.
// Yani counterın değeri değiştiği zaman virtualdom değişiyor ve dom ile fark olduğu için tekrar render ediliyor vs vs

// Computedlar ile reactivity sağlayabiliriz 