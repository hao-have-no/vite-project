import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
    token:localStorage.getItem('token')
  },
});

export default store;
