const app = Vue.createApp({
    data(){
        return {
            showBorder: false,
            boxClass: "border",
            redBg: false,
            bgColor: "cyan",
        };
    },
    computed: {
        boxClasses(){
           return { border: this.showBorder, red: this.redBg};
        }
    }
}).mount("#app");