<template>
  <header class="v-app-header l6t-g l6t-with_gutter l6t-with_row" v-if="deviceClassName !== 'is-small-screen'">
    <router-link
        to="/"
        class="v-app-header__logo l6t-g-m__coll-1-6 l6t-with_gutter l6t-with_row"
    >
      <img src="../assets/L6T-logo.svg" alt="logo les6toits" draggable="false">
    </router-link>

    <div class="v-app-header__links-coll l6t-g-m__coll-2-6 l6t-with_gutter l6t-with_row">
      <div class="v-app-header__links-g l6t-g" >
        <div class="l6t-g-m__coll-3-6">
          <router-link class="l6t-with_gutter" to="/">Présentation</router-link>
          <router-link class="l6t-with_gutter" to="/#programme">Programme</router-link>
        </div>
        <div class="l6t-g-m__coll-3-6">
          <router-link class="l6t-with_gutter" to="#infos">Infos pratiques</router-link>
          <router-link class="l6t-with_gutter" to="/contact">Contacter</router-link>
        </div>
      </div>
    </div>
    <div
        class="v-app-header__other-pages-link l6t-with_row"
    >
      <router-link
          v-for="(pageLinkValue, pageLinkKey) of l6tStore.l6tDataPages"
          class="l6t-with_gutter"
          :to="'/' + pageLinkKey"
      >{{pageLinkValue.title}}</router-link>
    </div>
  </header>

  <header
      v-if="deviceClassName === 'is-small-screen'"
      class="v-app-header l6t-g l6t-with_gutter l6t-with_row"
  >
    <router-link
        to="/"
        class="v-app-header__logo l6t-g-m__coll-1-6 l6t-with_gutter l6t-with_row"
    >
      <img src="../assets/L6T-logo.svg" alt="logo les6toits" draggable="false">
    </router-link>

    <div
        class="v-app-header__links-coll l6t-with_row"
    >
      <router-link class="l6t-with_gutter" to="/#presentation">Présentation</router-link>
      <router-link class="l6t-with_gutter" to="/#programme">Programme</router-link>
      <router-link class="l6t-with_gutter" to="#infos">Infos pratiques</router-link>
      <router-link class="l6t-with_gutter" to="/contact">Contacter</router-link>

      <router-link
          v-for="(pageLinkValue, pageLinkKey) of l6tStore.l6tDataPages"
          class="l6t-with_gutter"
          :to="'/' + pageLinkKey"
      >{{pageLinkValue.title}}</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useL6tStore} from "@/stores/l6tStore";
import type {DeviceClassName} from "@/scripts/setDeviceClassName";

export default defineComponent({
  data() {
    return {
      l6tStore: useL6tStore()
    }
  },

  computed: {
    deviceClassName(): DeviceClassName {
      return this.l6tStore.deviceClassName
    }
  }
})
</script>

<style lang="scss">
.v-app-header {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: var(--l6t-app-header-height);
  z-index: 1000;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  background-color: var(--l6t-color-light);

  .v-app-header__logo {
    img {
      -webkit-user-drag: none;
      user-select: none;
      display: block;
      height: 2rem;
    }
  }

  .v-app-header__other-pages-link {
    width: 50%;
    display: flex;
    flex-direction: row;

    .is-medium-screen & {
      justify-content: right;
    }
    .is-small-screen & {
      width: 100%;
      justify-content: right;
    }
  }

  .is-small-screen & {
    flex-wrap: nowrap;

    .v-app-header__logo {
      flex-grow: 0;
      flex-shrink: 0;
    }

    .v-app-header__links-coll {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      > * {
        white-space: nowrap;
      }
    }

    .v-app-header__links-g {
      width: 100%;
      justify-content: right;
    }
  }
}
</style>
