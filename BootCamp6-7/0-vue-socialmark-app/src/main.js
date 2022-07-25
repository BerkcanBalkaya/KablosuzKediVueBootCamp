import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/style.css";

import appHeader from "@/components/Shared/appHeaderCmp";
// appAxios ile {appAxios} farkı ES6 da export yaparken default kullanılması veya kullılmaması ile ilgili default varsa import x from "/../.../.." yoksa import {} from "../../.."
import { appAxios } from "@/utils/appAxios";
import appBookmarkList from "@/components/Shared/appBookmarkList/indexCmp";
import store from "./store";

const app = createApp(App);
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
