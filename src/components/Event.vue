<template>
  <section class="v-event">

    <header class="v-event__header">
      <div>{{ l6tEvent.dates }}</div>
      <div>{{ l6tEvent.hours }}</div>
      <div>
        <img v-if     ="l6tEvent.tag === 'conservatoir'"  src="../assets/tags/conservatoire.svg" alt="conservatoire"/>
        <img v-else-if="l6tEvent.tag === 'contrechamps'"  src="../assets/tags/contrechamps.svg"  alt="contrechamps"/>
        <img v-else-if="l6tEvent.tag === 'eklekto'"       src="../assets/tags/eklekto.svg"       alt="eklekto"/>
        <img v-else-if="l6tEvent.tag === 'orchestre'"     src="../assets/tags/OCG.svg"           alt="OCG"/>
      </div>
      <h1
          v-if="l6tEvent.title"
      >{{l6tEvent.title}}</h1>
    </header>

    <div class="v-event__body">
      <img
          v-if="l6tEvent.imageCoverURL"
          :src="l6tEvent.imageCoverURL"
          alt="item cover"
          class="l6t-img v-event__img"
      >

      <h2
          class="v-event__subtitle"
          v-if="l6tEvent.subtitle"
      >{{l6tEvent.subtitle}}</h2>

      <div
          v-html="l6tEvent.textContent"
      ></div>

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

  .v-event__header h1 {
    text-decoration: underline;
  }

  .v-event__subtitle {
    text-align: center;
  }
}
</style>
