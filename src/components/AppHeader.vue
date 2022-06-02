<template>
  <header class="v-app-header l6t-g l6t-with_gutter l6t-with_row">
    <div class="l6t-g__coll-1-6 l6t-with_gutter l6t-with_row">
      les 6 toits
    </div>

    <div class="l6t-g__coll-2-6 l6t-with_gutter l6t-with_row">
      <div class="l6t-g" >
        <div class="l6t-g__coll-3-6">
          <a>linen</a>
          <a>linen</a>
        </div>
        <div class="l6t-g__coll-3-6">
          <a>linen</a>
          <a>linen</a>
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
  a {
    display: block;
  }
}
</style>
