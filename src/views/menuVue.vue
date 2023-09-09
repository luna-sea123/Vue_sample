<template>
  <div class="menu">
    <h1>menu</h1>
    <Header></Header>
    <Body></Body>
    <top msg="メニュー画面です"></top>
    <Body></Body>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Body from "@/components/Body.vue";
  import top from "@/components/top.vue";

  export default {
    components: {
      Header,
      Body,
      top,
    },
  };
</script>
