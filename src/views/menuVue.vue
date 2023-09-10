<template>
  <div class="menu">
    <h1>menuVue</h1>
    <Header></Header>
    <Body></Body>
    <top msg="topの内容です"></top>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Body from "@/components/Body.vue";
  import top from "@/components/top.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      Header,
      Body,
      top,
      Footer,
    },
  };
</script>
