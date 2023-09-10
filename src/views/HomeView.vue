<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.title }}
      </li>
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.content }}
      </li>
    </ul>
    <div v-else>
      <h1>メモはありません</h1>
      <router-link to="/memo">memoの作成</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    computed: {
      hasMemos() {
        return this.$store.state.memos.lemgth;
      },
      memos() {
        return this.$store.state.memos;
      },
    },
  };
</script>
