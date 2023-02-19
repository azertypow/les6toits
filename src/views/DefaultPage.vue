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
          class="v-default-page__intro__img l6t-g-l__coll-3-6 l6t-with_gutter"
      >
        <template
            v-for="file of content.image"
        >
          <img
              v-if="(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file.originalUrl)"
              class="v-default-page__cover l6t-img"
              :src="file.largeUrl"
              alt="image header"
          >
        </template>
      </div>

      <div
          v-if="getPDFInArrayFilesOfContent(Object.values(content.image) ).length > 0"
      >
        <a
            v-for="file of getPDFInArrayFilesOfContent(Object.values(content.image))"
            :href="file.originalUrl"
        >{{file.originalUrl}}</a>
      </div>
    </section>

    <app-footer></app-footer>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useL6tStore} from "@/stores/l6tStore";
import type {IL6tDataPage, IL6tImage} from "@/stores/l6tStore";
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  name: 'DefaultPage',
  components: {AppFooter},

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

  methods: {
    getPDFInArrayFilesOfContent(filesOfContent: IL6tImage[]): IL6tImage[] {
      return filesOfContent.filter(value => {
        return (/\.(pdf)$/i).test(value.originalUrl)
      })
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