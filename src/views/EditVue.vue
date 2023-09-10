<template>
  <MemoForm v-if="memo" :memo="memo" />
  <p else>指定されたメモはありません</p>
</template>

<script>
  import MemoForm from "@/components/MemoForm.vue";

  export default {
    name: "EditVue",
    components: {
      MemoForm,
    },

    computed: {
      memo() {
        const id = parseInt(this.$route.params.id);
        return this.$store.getters.getMemoById(id);
      },
    },
  };
</script>
