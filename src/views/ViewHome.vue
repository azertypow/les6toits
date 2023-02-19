<template>
  <div class="v-view-home">

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

    <section
        id="programme"
        class="l6t-g l6t-with_gutter"
    >

      <div
          class="l6t-g-l__coll-3-6 l6t-with_gutter"
      >
        <div
            class="v-view-home__event-item"
            v-for="l6tEvent of shortedEventsEven"
        >
          <event
              :l6t-event="l6tEvent"
          ></event>
        </div>
      </div>

      <div
          class="l6t-g-l__coll-3-6 l6t-with_gutter"
      >
        <div
            class="v-view-home__event-item"
            v-for="l6tEvent of shortedEventsOdd"
        >
          <event
              :l6t-event="l6tEvent"
          ></event>
        </div>
      </div>

    </section>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {IL6tEvent} from "@/stores/l6tStore"
import {useL6tStore} from "@/stores/l6tStore"
import Event from "@/components/Event.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  components: {Event, AppFooter},
  data() {
    return {
      l6tStore: useL6tStore()
    }
  },

  computed: {
    shortedEventsEven(): IL6tEvent[] {
      return this.l6tStore.l6tData.events.filter(
          (value, index) => { return index % 2 === 0}
      )
    },
    shortedEventsOdd(): IL6tEvent[] {
      return this.l6tStore.l6tData.events.filter(
          (value, index) => { return index % 2 !== 0}
      )
    }

  }

})</script>

<style lang="scss">
.v-view-home {
  .v-view-home__intro {
    margin-bottom: 1rem;
  }

  .v-view-home__intro__text {
    h2 {
      text-align: center;
    }
  }

  .v-view-home__cover {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .v-view-home__event-item + .v-view-home__event-item {
    margin-top: 1rem;
  }

  .is-small-screen &,
  .is-medium-screen & {

    .v-view-home__intro {
      flex-direction: column-reverse;
    }

    .v-view-home__intro__img {
      margin-bottom: 1rem;
    }

    .v-view-home__cover {
      max-height: calc( 100vh - var(--l6t-app-header-height) - 1rem );
    }

    #programme {
      > * {
        width: 100%;
      }

      > *:nth-child(2) {
        margin-top: 1rem;
      }
    }

  }
}
</style>
