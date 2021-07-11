<template>
  <header class="pb-10 flex items-center">
    <p class="text-sm">
      {{ startXp }}
    </p>
    <div class="mx-4 lg:mx-6 flex-1 bg-gray-line h-1 rounded-md">
      <div
        class="relative bg-green h-1"
        :style="{ width: `${currentXpPercentage}%` }"
      >
        <p class="text-sm absolute -right-4 w-max top-2">
          {{ currentXp }}
        </p>
      </div>
    </div>
    <p class="text-sm">
      {{ `${xp.end}xp` }}
    </p>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState("Challenges", ["xp"]),
    ...mapGetters("Challenges", ["currentXpPercentage"]),

    startXp: function () {
      return `${this.xp.start}xp`;
    },

    currentXp: function () {
      return `${this.xp.current}xp (${this.currentXpPercentage}%)`;
    },
  },
});
</script>