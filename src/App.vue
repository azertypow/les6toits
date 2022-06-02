<template>
  <main class="v-app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  components: {AppFooter, AppHeader},
  props: {
    name: String,
    msg: {type: String, required: true}
  },

})</script>

<style lang="scss">
.v-app {
  padding-top: var(--l6t-app-header-height);
  background-color: var(--l6t-color-light);
}
</style>
