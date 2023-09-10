<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <div v-else>
      <h1>no memo</h1>
      <router-link to="/memo">create memo</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    computed: {
      hasMemos() {
        return this.$store.getters.getCount;
      },
      memos() {
        return this.$store.getters.getAll;
      },
    },
  };
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  li a {
    color: blue;
    text-decoration: none;
    width: 100%;
    display: block;
  }
</style>
