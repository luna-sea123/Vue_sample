//typeScript router/index.js
import { createStore, Store } from "vuex";

// メモの型を定義
interface Memo {
  //変数名：型名
  id: number;
  title: string;
  content: string;
}

// ストアの状態の型を定義
interface State {
  count: number;
  memos: Memo[];
}

// Vuexストアを作成
export default createStore<State>({
  state: {
    count: 0,
    memos: [],
  },

  getters: {
    getCount: (state) => {
      return state.memos.length;
    },
    getAll: (state) => {
      return state.memos;
    },
    getMemoById: (state) => (id: number) => {
      return state.memos.find((memo) => memo.id === id);
    },
  },

  mutations: {
    save(state, newMemo: Memo) {
      if (newMemo.id) {
        const existingMemo = state.memos.find((memo) => memo.id === newMemo.id);
        if (existingMemo) {
          existingMemo.title = newMemo.title;
          existingMemo.content = newMemo.content;
        }
      } else {
        newMemo.id = ++state.count;
        state.memos.unshift(newMemo);
      }
    },
  },

  actions: {},

  modules: {},
});
