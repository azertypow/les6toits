<template>
  <header class="v-app-header l6t-g l6t-with_gutter l6t-with_row">
    <router-link
        to="/"
        class="v-app-header__logo l6t-g-m__coll-1-6 l6t-with_gutter l6t-with_row"
    >
      <img src="../assets/L6T-logo.svg" alt="logo les6toits" draggable="false">
    </router-link>

    <div class="v-app-header__links-coll l6t-g-m__coll-2-6 l6t-with_gutter l6t-with_row">
      <div class="v-app-header__links-g l6t-g" >
        <div class="l6t-g-m__coll-3-6">
          <a class="l6t-with_gutter" href="#presentation">Présentation</a>
          <a class="l6t-with_gutter" href="#programme">Programme</a>
        </div>
        <div class="l6t-g-m__coll-3-6">
          <a class="l6t-with_gutter" href="#infos">infos pratiques<br>& contacts</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
})</script>

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

  .is-small-screen & {
    flex-wrap: nowrap;

    .v-app-header__logo {
      flex-grow: 0;
      flex-shrink: 0;
    }

    .v-app-header__links-coll {
      width: 100%;
    }

    .v-app-header__links-g {
      width: 100%;
      justify-content: right;
    }
  }
}
</style>
