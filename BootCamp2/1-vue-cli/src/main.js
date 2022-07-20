import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style.css";
// Mesela burada global olarak kullanabileceğimiz bir component tanımladık gibi düşünebiliriz artık bunu kullanmak için template içerisine direk olarak tüm componentlerde yazabiliriz.
import appHeader from "@/components/appHeader";

const app = createApp(App);

app.component("app-header", appHeader);

app.mount("#app");
