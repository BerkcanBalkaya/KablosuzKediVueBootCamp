export default {
  state: {
    contactName: "puresol",
    contactAddress: "Almanya",
    propertyList: [],
  },
  mutations: {
    setName(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: (state) => state.contactName,
    // _itemList: (state) => state.propertyList,
  },
};
