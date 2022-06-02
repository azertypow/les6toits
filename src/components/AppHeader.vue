<template>
  <header class="v-app-header l6t-g l6t-with_gutter l6t-with_row">
    <div class="l6t-g__coll-1-6 l6t-with_gutter l6t-with_row">
      les 6 toits
    </div>

    <div class="l6t-g__coll-2-6 l6t-with_gutter l6t-with_row">
      <div class="l6t-g" >
        <div class="l6t-g__coll-3-6">
          <a href="#presentation">Présentation</a>
          <a href="#programme">Programme</a>
        </div>
        <div class="l6t-g__coll-3-6">
          <a href="#infos">infos pratiques<br>et contacts</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
  },

})</script>

<style lang="scss">
.v-app-header {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: var(--l6t-app-header-height);

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  background-color: var(--l6t-color-light);
}
</style>
