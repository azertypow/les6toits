<template>
  <div class="v-logo-list">
    <div class="l6t-g">
      <img
          v-for="logo of useL6tStore().l6tDataPresentation.logos"
          class="l6t-with_gutter"
          :src="logo.mediumUrl"
          :alt="logo.alt"
      >
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useL6tStore} from "@/stores/l6tStore";

export default defineComponent({
  methods: {useL6tStore}
})
</script>

<style lang="scss">
.v-logo-list {
  img {
    display: block;
    height: 2rem;
    mix-blend-mode: darken;
    filter: grayscale(1);
    margin-top: 1rem;
  }
}
</style>
