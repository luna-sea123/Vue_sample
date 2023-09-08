<template>
  <div class="menu">
    <h1>menu</h1>
    <HelloWorld msg="メニュー画面です"></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "menuVue",
    components: {
      HelloWorld,
    },
  };
</script>
