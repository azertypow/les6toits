<template>
  <div class="v-default-page">
    <div
        class="l6t-with_gutter"
    >
      <div
        class="l6t-with_gutter"
      >
        <h1>{{currentPageData.title}}</h1>
      </div>
    </div>
    <section
        class="v-default-page__intro l6t-g l6t-with_gutter"
        v-for="content of currentPageData.content"
        :class="{
          'has-just-image': content.text === null,
        }"
    >
      <div
          v-if="content.text"
          v-html="content.text"
          class="v-default-page__intro__text l6t-g-l__coll-3-6 l6t-with_gutter l6t-remove-child-margin"
      ></div>

      <div
          v-if="content.image"
          class="v-default-page__intro__img l6t-g-l__coll-3-6 l6t-with_gutter"
      >
        <img
            class="v-default-page__cover l6t-img"
            :src="content.image.largeUrl"
            alt="image header"
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useL6tStore} from "@/stores/l6tStore";
import type {IL6tDataPage} from "@/stores/l6tStore";

export default defineComponent({
  name: 'DefaultPage',
  components: {},

  data() {
    return {
      l6tStore: useL6tStore(),
    }
  },

  computed: {
    currentPageData(): IL6tDataPage {
      return this.l6tStore.l6tDataPages['pages/'+this.$route.params.uid]
    }
  },
});
</script>

<style lang="scss" >
.v-default-page {

  .v-default-page__intro {
    margin-bottom: 1rem;

    &.has-just-image {
      > * {
        width: 100% !important;
      }
    }
  }

  .v-default-page__intro__text {
    h2 {
      text-align: center;
    }
  }

  .v-default-page__cover {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .is-small-screen &,
  .is-medium-screen & {

    .v-default-page__intro {
      flex-direction: column-reverse;
    }

    .v-default-page__intro__img {
      margin-bottom: 1rem;
    }

    .v-default-page__cover {
      max-height: calc( 100vh - var(--l6t-app-header-height) - 1rem );
    }
  }
}
</style>