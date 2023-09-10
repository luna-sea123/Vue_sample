import { createStore } from "vuex";

export default createStore({
  //状態 データ
  state: {
    count: 0,
    //memo配列
    memos: [],
  },

  //ストア内のデータを取ってくる
  getters: {},

  //ステイトの内容を変更する
  mutations: {
    //メモを保存
    save(state, newMemo) {
      //メモにId付与
      newMemo.id = ++state.count;
      //unshift 配列の先頭に値を代入
      state.memos.unshift(newMemo);
    },
  },
  //非同期通信
  actions: {},
  //複数のステイトをモジュールとする
  modules: {},
});
