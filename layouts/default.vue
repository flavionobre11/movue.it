<template>
  <div class="min-h-screen max-w-5xl mx-auto flex flex-col px-5 md:py-10">
    <ExperienceBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExperienceBar from "~/components/atoms/ExperienceBar.vue";
export default Vue.extend({
  name: "default",
  components: {
    ExperienceBar,
  },
});
</script>