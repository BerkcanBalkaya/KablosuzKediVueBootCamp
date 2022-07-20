const app = Vue.createApp({
    data(){
      return {
        fullName:"eh işte", 
    };

       
    },
    methods: {

        updateValue(event){
            //alttaki iki satırda hem event hem de attribute binding var
            console.log(event.target.value);
            this.fullName = event.target.value;
        },
    },
}).mount("#app");