<template>
  <div class="flex items-center">
    <img
      src="https://github.com/flavionobre11.png"
      alt="Foto de perfil: Flavio Nobre"
      class="mr-6 w-20 h-20 rounded-full"
    />
    <div class="flex flex-col w-full">
      <strong class="text-title text-2xl">Flavio Nobre</strong>
      <p class="flex items-center">
        <img src="icons/level.svg" alt="level" class="mr-2" />
        <span class="text-base">Level {{ level }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  computed: mapState("Challenges", ["level"]),
});
</script>