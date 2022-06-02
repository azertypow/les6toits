<template>
  <section class="v-event">

    <header class="v-event__header">
      <div>{{ l6tEvent.dates }}</div>
      <div>{{ l6tEvent.hours }}</div>
      <div>{{l6tEvent.tag}}</div>
      <h3
          v-if="l6tEvent.title"
      >{{l6tEvent.title}}</h3>
    </header>

    <div class="v-event__body">
      <img
          v-if="l6tEvent.imageCoverURL"
          :src="l6tEvent.imageCoverURL"
          alt="item cover"
          class="l6t-img v-event__img"
      >

      <h4
          v-if="l6tEvent.subtitle"
      >{{l6tEvent.subtitle}}</h4>

      <div>
        {{l6tEvent.textContent}}
      </div>

      <div
          v-if="l6tEvent.credit"
      >
        {{l6tEvent.credit}}
      </div>

    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import type {IL6tEvent} from "@/stores/l6tStore"

export default defineComponent({
  props: {
    l6tEvent: {
      type: Object as PropType<IL6tEvent>,
      required: true,
    }
  },

})</script>

<style lang="scss">
.v-event {
  border-top: solid 2px;

  .v-event__img {
    width: calc( 100% / 6 * 4);
    margin: auto;
  }
}
</style>
