<template>
  <section
      class="v-event"
      :class="{
        'is-orchestre'    : l6tEvent.tag === 'orchestre',
        'is-eklekto'      : l6tEvent.tag === 'eklekto',
        'is-contrechamps' : l6tEvent.tag === 'contrechamps',
        'is-conservatoir' : l6tEvent.tag === 'conservatoir',
      }"
  >

    <header class="v-event__header l6t-g">

      <div
          class="v-event__header__dates"
      >
        <div
            v-for="date of l6tEvent.dates"
            class="v-event__header__date-item l6t-text--alternate"
        >
          <template
              v-if="date.jours"
          >
            <div
                class="v-event__header__date-item__day"
            >{{ date.jours }} |</div>

            <div
                class="v-event__header__date-item__hours"
            >
              <div
                  v-for="hour of date.hours"
                  class="v-event__header__date-item__hours__item"
              >&nbsp;{{ hour }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="v-event__header__tag" >
        <img v-if     ="l6tEvent.tag === 'conservatoir'"  src="../assets/tags/conservatoire.svg" alt="conservatoire" style="height: 4rem" />
        <img v-else-if="l6tEvent.tag === 'contrechamps'"  src="../assets/tags/contrechamps.svg"  alt="contrechamps"  style="height: 1.5rem" />
        <img v-else-if="l6tEvent.tag === 'eklekto'"       src="../assets/tags/eklekto.svg"       alt="eklekto"       style="height: 1.5rem" />
        <img v-else-if="l6tEvent.tag === 'orchestre'"     src="../assets/tags/OCG.svg"           alt="OCG"           style="height: 3rem" />
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
          class="v-event__credit l6t-text--alternate"
          v-if="l6tEvent.credit"
          v-html="l6tEvent.credit"
      ></div>

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
  border-top: solid var(--l6t-ui-line);

  .v-event__header {
    justify-content: space-between;
  }

  .v-event__header__date-item {
    margin-top: 1rem;
    display: flex;
  }

  .v-event__header__tag {
    margin-top: 1rem;
  }

  .v-event__img {
    width: calc( 100% / 6 * 4);
    margin: auto;
  }

  .v-event__header h1 {
    border-bottom: solid var(--l6t-ui-line);
  }

  .v-event__subtitle {
    text-align: center;
  }

  .v-event__credit {

  }

  &.is-orchestre {
    .v-event__img {
      filter: url(#teal-lightgreen) hue-rotate(67.9deg) saturate(6) brightness(1.4) contrast(0.5);
    }
  }

  &.is-eklekto {
    .v-event__img {
      filter: url(#teal-lightgreen) hue-rotate(189deg) saturate(2) brightness(1.12) contrast(0.6);
    }
  }

  &.is-contrechamps {
    .v-event__img {
      filter: url(#teal-lightgreen) hue-rotate(55deg) saturate(1.39) brightness(1.7) contrast(.6);
    }
  }

  &.is-conservatoir {
    .v-event__img {
      filter: url(#teal-lightgreen) hue-rotate(311deg) saturate(.47) brightness(.69) contrast(.6);
    }
  }
}
</style>
