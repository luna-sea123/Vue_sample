<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "footer",
        text: "fighting !!",
      };
    },
  };
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
  h1 {
    color: red;
  }
  p {
    color: red;
  }
</style>
