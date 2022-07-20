import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Berkcan",
      lname: "Balkaya",
      age: 24,
      adress: {},
      password: 13252,
      tc: 1111111,
    },
    theme: "dark",
    fullName: "Berkcan Balkaya",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Gokhan", "Tayfun", "İlker", "Ramazan", "Defne", "Kamil", "Cemil"],
    itemList: [
      {
        id: 1,
        title: "Masa",
        type: "Mobilya",
      },
      {
        id: 2,
        title: "Sandalye",
        type: "Mobilya",
      },
      {
        id: 3,
        title: "Tv",
        type: "Elektronik",
      },
      {
        id: 4,
        title: "Bardak",
        type: "Plastik",
      },
    ],
  },
  // state'i update etmemizi sağlayan hızlı olarak bunu gerçekleştiren mutationdur. senkron çalışır asenktron çalışmaz
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  //    asenktron işlemler için mutation yerine actions kullanılır.
  actions: {
    // context vuex ile ilgili bilgileri içeren değişken gibi düşünebilirsiniz. Obje olarak gelir bize
    // Burada context yerine {commit} diye destructive yapıyı kullanırsak context.commit yerine direk commit yazabiliriz.
    newItem(context, item) {
      console.log("item :>> ", item);
      // Burada da timeout ile hem bekleme ekliyoruz hem de bekleme sonunda anlık olarak çalışan mutationları commit ile çalıştırıyoruz. Commit olduğu için gidip de context.state.itemList.push gibi kullanmıyoruz.
      //   bu mantıkla asenkron işlemler kullanılabilir.
      setTimeout(() => {
        context.commit("newItem", item);
      }, 2000);
    },
  },
  //   Getterin tek işi stateteki bilgileri bize geri döndürmektir. Bunu daha sonra Appvue de this.$store.getters.woodItems diye kullanabiliriz.
  getters: {
    _woodItems: (state) => state.itemList.filter((i) => i.type == "Mobilya"),
    //mesela gelen bilgiyi ön tarafta state i silmeden göstermemek istiyorsak
    _activeUser(state) {
      const user = {
        // ... spread operatördür javascriptte. itemları alıp ilgili type'ın aynısının içerisine aktarılmasını sağlar.
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
