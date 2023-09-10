import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    //memo配列
    memos: [],
  },

  getters: {
    getCount: (state) => {
      return state.memos.length;
    },
    getAll: (state) => {
      return state.memos;
    },

    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id);
    },
  },

  mutations: {
    //メモを保存
    save(state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find((memo) => memo.id === newMemo.id);
        x.title = newMemo.title;
        x.content = newMemo.content;
      } else {
        newMemo.id = ++state.count;
        //unshift 配列の先頭に値を代入
        state.memos.unshift(newMemo);
      }
    },
  },

  actions: {},
  modules: {},
});
