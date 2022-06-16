<template>
  <div class="v-logo-list">
    <div class="l6t-g">
      <img class="l6t-with_gutter" src="/public/logo/EGS_Schriftzug_2_schwarz-300x105.jpeg" alt="">
      <img class="l6t-with_gutter" src="/public/logo/logo-avec-soutien-ville-geneve-positif.jpg" alt="">
      <img class="l6t-with_gutter" src="/public/logo/LoRo-LogoBeneficiaires-NB-small.jpeg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({})
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
