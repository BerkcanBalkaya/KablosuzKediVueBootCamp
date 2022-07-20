export default {
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
