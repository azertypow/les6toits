<template>
  <main
      class="v-app"
      :class="this.deviceClassName"
  >
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import type {DeviceClassName} from "@/scripts/setDeviceClassName"
import {setDeviceClassName} from "@/scripts/setDeviceClassName"

export default defineComponent({
  components: {AppFooter, AppHeader},

  data() {
    return {
      deviceClassName: ""
    }
  },

  mounted() {
    this.deviceClassName = setDeviceClassName()

    window.addEventListener("resize", () => { this.deviceClassName = setDeviceClassName() })
  }
})</script>

<style lang="scss">
.v-app {
  padding-top: var(--l6t-app-header-height);
  background-color: var(--l6t-color-light);
}
</style>
