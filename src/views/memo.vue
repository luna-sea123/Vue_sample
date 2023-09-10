<template>
  <div class="memo">
    <h2>memo</h2>
    <MemoForm />
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
