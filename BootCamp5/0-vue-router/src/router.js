import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from "@/views/Home";

const routes = [
  {
    name: "HomePage",
    path: "/",
    // Aşağıdaki ikisi de aynı işi yapar
    // component: Home,
    component: () => import("@/views/HomeCmp"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    // Aşağıdaki ikisi de aynı işi yapar
    // component: Home,
    component: import("@/views/AboutCmp"),
  },
  {
    name: "DetailsPage",
    path: "/detay/:userID",
    // Aşağıdaki ikisi de aynı işi yapar
    // component: Home,
    component: import("@/views/DetailsCmp"),
  },
];

const router = createRouter({
  routes,
  // history: createWebHistory(),

  // # ekliyor bunu neden kullanıyoruz peki = # sayesinde spa olduğunu belirtiyoruz yoksa mesela enginex de configürasyon yapmadıysak sunucu routing işlemlerinde bizim route stringimizi çözemiyor.
  history: createWebHashHistory(),
});

export default router;

//name özelliği olmasının sebebi bazı sayfalarda mesela route veya path yerine name kontrol etmek bazı durumlarda daha kolaydır gibi
