<template>
  <div class="default-page">
    <section
        id="presentation"
        class="v-view-home__intro l6t-g l6t-with_gutter"
    >
      <div
          v-html="l6tStore.l6tDataPresentation.introContent"
          class="v-view-home__intro__text l6t-g-l__coll-3-6 l6t-with_gutter l6t-remove-child-margin"
      ></div>

      <div class="v-view-home__intro__img l6t-g-l__coll-3-6 l6t-with_gutter" >
        <img
            class="v-view-home__cover l6t-img"
            src="/public/L6T_presentation.jpg"
            alt="image header"
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DefaultPage',
  components: {},

});
</script>

<style lang="scss" scoped>
.default-page {

}
</style>