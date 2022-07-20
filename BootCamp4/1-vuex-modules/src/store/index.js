import { createStore } from "vuex";
import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";
// moduleler içerisinde import vuex yapmamamız sebebi onların bir store olmaması onlar birer module

const store = createStore({
  state: {
    mainName: "Bishou",
  },
  modules: {
    // ecmascript sayesinde biz contact, olarak da bıraksak o bizim için contact: contact olarak açar bunu yani kısaca yazabiliriz.
    musteri: contact,
    taskmanager,
  },
});

export default store;
