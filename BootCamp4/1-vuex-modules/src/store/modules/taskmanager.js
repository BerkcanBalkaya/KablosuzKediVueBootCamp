export default {
  //namespace true sayesinde artık doğası gereği tümü birden getirilen gettersların farklı modullerde aynı isimlerde çakışmadan kullanılabilmesin sağlayacaktır.
  namespaced: true,
  state: {
    itemList: [],
    userList: [],
  },
  mutations: {
    setName(state, item) {
      state.itemList.push(item);
    },
  },
  getters: {
    _itemList: (state) => state.itemList,
  },
};
