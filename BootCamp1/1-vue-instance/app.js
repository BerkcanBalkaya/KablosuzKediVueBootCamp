// Vue js ile kontrol etmek için öncelikle vue.js uygulamasını üretmemiz gerekiyor
// Bunun içerisinde bir obje oluşturup gönderiyoruz.
const app = Vue.createApp({
    //Buraya view instance diyoruz html kısmına template diyoruz.
    data(){
        return {
            title: "Vue js bootcamp 1.gün güüüün",
            content: "Lorem ipsum dolor sit amettttttt",
            eduflow: {
                title: "Deneme açıklama",
                target: "_blank",
                url: "https://www.google.com",
                alt: "google-açılamadı",
            },
            owner: "poaca",
            coords:{
                x:0,
                y:0,
            }
        };
    },
    methods: {
        changeTitle(title){
            this.title = title;
        },
        //  Eventi göndermesek bile html kısmından, otomatik olarak event gönderilir. 
        //  Eğer html tarafında parametre girilirse event otomatik olarak gönderilmez $event olarak parametrede gönderilmesi gerekir 
        updateCoords(event, message){
            // console.log(message,event.x,event.y);
            // template literal kullanıldı aşağıda ``
            this.changeTitle(`${event.x},${event.y}`);
            this.coords= {
                x: event.x,
                y: event.y,
            };
        }
    }
}).mount("#app");

// String interpolation dediğimiz şey ile bir yapıyı html tarafında kullanabilmemizi sağlar. {{ Şu şekilde yapılır.}}
// Mount ile #app sınırları içerisinde çalıştırılacağını belirtiyoruz.
// String interpolution textcontentinin olduğu yerde kullanılabilir yani <> arasında kullanılır. Attributelarda v-.... gibi kullanmamız lazım
// String interpolution ile içerisine kod falan da yazabiliriz.