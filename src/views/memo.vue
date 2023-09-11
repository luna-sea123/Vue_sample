<template>
  <div class="memo">
    <h2>memo</h2>
    <!-- 追記でCannot read properties of undefined (reading 'title')
    TypeError: Cannot read properties of undefined (reading 'title')
    解消 -->
    <MemoForm memo="" />
    <Footer />
  </div>
</template>
<script>
  import MemoForm from "@/components/MemoForm.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "memo",
    components: {
      MemoForm,
      Footer,
    },
  };
</script>
