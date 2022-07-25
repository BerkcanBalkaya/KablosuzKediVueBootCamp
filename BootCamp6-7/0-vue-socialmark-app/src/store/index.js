import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?",
  },
  getters: {
    _isAuthenticated: (state) => state.user != null,
    _getCurrentUser(state) {
      const user = state.user;
      //   normalde burada user null olduğu zaman user.password derken null.password olmadığı için hata ile karşılaşırız bunu çözmek için if kullanılabilir ya da optional chaining yapılabilir
      // if hali
      // if(user !=null && user.hasOwnProperty("password")){
      //     delete user.password;
      // }
      // opsiyonal chain hali soru işareti koyarak yapılır bu eğer varsa gibisinden çalışır eğer password varsa diyor aşağıda yani
      delete user?.password;
      return user;
    },
    _currentUserId: (state) => state?.user?.id,
    _saltKey: (state) => state.saltKey,
    _userLikes: (state) => state.user?.likes || [],
    _userBookmarks: (state) => state.user?.bookmarks || [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
    addToLikes(state, bookmarkId) {
      state.user.likes.push(bookmarkId);
    },
    setLikes(state, bookmarkIds) {
      state.user.likes = bookmarkIds;
    },
    setBookmarks(state, bookmarkIds) {
      state.user.bookmarks = bookmarkIds;
    },
  },
  //   local storege a state imizi yazıp sayfa yenilendiğinde state bilgisi korumasını sağlayan yapı vuex-persistedstate paketi ile birlikte kullanabiliyoruz bu özelliği
  //   aşağıda aynı zamanda secureLs paketi ile gelen getset ve remove item methodlarını kullanarak local storage de tutulan verileri şifreleyerek tutuyoruz bu sayede güvenlik ++
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
