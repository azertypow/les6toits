<template>
  <section
      class="v-archive-event"
      :class="{
        'is-orchestre'    : l6tEvent.tags.split(',')[0] === 'orchestre',
        'is-eklekto'      : l6tEvent.tags.split(',')[0] === 'eklekto',
        'is-contrechamps' : l6tEvent.tags.split(',')[0] === 'contrechamps',
        'is-conservatoire' : l6tEvent.tags.split(',')[0] === 'conservatoire',
        'is-empty-tag'    : l6tEvent.tags.split(',')[0] === '' | l6tEvent.tags.split(',')[0] === 'invités',
      }"
  >

    <header class="v-archive-event__header l6t-g">

      <div
          class="v-archive-event__header__dates"
      >
        <div
            v-for="date of l6tEvent.dates"
            class="v-archive-event__header__date-item l6t-text--alternate"
        >
          <template
              v-if="isIL6tDate(date)"
          >
            <div
                class="v-archive-event__header__date-item__day"
            >{{ date.jours }}</div>
          </template>
        </div>
      </div>
      <div class="v-archive-event__header__tag" >
        <img v-if     ="l6tEvent.tags.split(',')[0] === 'conservatoire'"  src="../assets/tags/conservatoire.svg" alt="conservatoire" style="height: 4rem" />
        <img v-else-if="l6tEvent.tags.split(',')[0] === 'contrechamps'"   src="../assets/tags/contrechamps.svg" alt="contrechamps" style="height: 1.5rem" />
        <img v-else-if="l6tEvent.tags.split(',')[0] === 'eklekto'"        src="../assets/tags/eklekto.svg" alt="eklekto" style="height: 1.5rem" />
        <img v-else-if="l6tEvent.tags.split(',')[0] === 'orchestre'"      src="../assets/tags/OCG.svg" alt="OCG" style="height: 3rem" />
        <img v-else-if="l6tEvent.tags.split(',')[0] === 'invités'"      src="../assets/tags/invitees.svg" alt="invités" style="height: 1.5rem" />
        <img v-else-if="l6tEvent.tags.split(',')[0] === 'les6toits'"      src="../assets/tags/les6toits.svg" alt="les6toits" style="height: 1.5rem" />
      </div>
      <div class="v-archive-event__header__title">
        <h1
            v-if="l6tEvent.title"
        >{{l6tEvent.title}}</h1>
      </div>
    </header>

    <div class="v-archive-event__body">
      <img
          v-if="l6tEvent.imageCoverURL"
          :src="l6tEvent.imageCoverURL.mediumUrl"
          alt="item cover"
          class="l6t-img v-archive-event__img"
      >

      <div
          class="v-archive-event__body_text"
      >
        <h2
            class="v-archive-event__subtitle"
            v-if="l6tEvent.subtitle"
        >{{l6tEvent.subtitle}}</h2>

        <div
            v-html="l6tEvent.textContent"
        ></div>

        <div
            class="v-archive-event__credit l6t-remove-child-margin l6t-text--alternate"
            v-if="l6tEvent.credit"
            v-html="l6tEvent.credit"
        ></div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import type {IL6tEvent} from "@/stores/l6tStore"
import type {IL6tDate, l6tDate} from "@/stores/l6tStore"

export default defineComponent({
  props: {
    l6tEvent: {
      type: Object as PropType<IL6tEvent>,
      required: true,
    }
  },

  methods: {
    isIL6tDate(date: l6tDate): date is IL6tDate {
      return (date as IL6tDate).jours !== undefined
    }
  },

})</script>

<style lang="scss">
.v-archive-event {
  border-top: solid var(--l6t-ui-line);

  .v-archive-event__header {
    justify-content: space-between;
    max-width: 750px;
    margin: auto;
  }

  .v-archive-event__header__date-item {
    margin-top: 1rem;
    display: flex;

    & + .v-archive-event__header__date-item {
      margin-top: 0;
    }
  }

  .v-archive-event__header__tag {
    margin-top: 1rem;
  }

  .v-archive-event__img {
    width: calc( 100% / 6 * 4);
    margin: auto;
  }

  .v-archive-event__body_text {
    max-width: 750px;
    margin: auto;

    p {
      font-size: .75rem;
      line-height: 1.25em;
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }

  .v-archive-event__header__title {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 25em;

    h1 {
      margin: 0;
      display: inline;
      font-size: 1.25rem;
      line-height: 1em;
      text-shadow:
          -2px -2px var(--l6t-color-light),
          -2px 2px  var(--l6t-color-light),
          2px -2px  var(--l6t-color-light),
          2px 2px   var(--l6t-color-light);
      box-shadow:
          inset 0 calc(-1 * .075em                      ) var(--l6t-color-light),
          inset 0 calc(-1 * .075em - var(--l6t-ui-line) ) var(--l6t-color-dark);
    }
  }

  .v-archive-event__subtitle {
    text-align: center;
  }

  .v-archive-event__credit {

  }

  &.is-orchestre {
    .v-archive-event__img {
      filter:         grayscale(1) url(#L6S-svg-gradient-map--yellow);
      -webkit-filter: grayscale(1) url(#L6S-svg-gradient-map--yellow);
    }
  }

  &.is-eklekto {
    .v-archive-event__img {
      filter:         grayscale(1) url(#L6S-svg-gradient-map--blue);
      -webkit-filter: grayscale(1) url(#L6S-svg-gradient-map--blue);
    }
  }

  &.is-contrechamps {
    .v-archive-event__img {
      filter:         grayscale(1) url(#L6S-svg-gradient-map--reg);
      -webkit-filter: grayscale(1) url(#L6S-svg-gradient-map--reg);
    }
  }

  &.is-conservatoire {
    .v-archive-event__img {
      filter:         grayscale(1) url(#L6S-svg-gradient-map--purple);
      -webkit-filter: grayscale(1) url(#L6S-svg-gradient-map--purple);
    }
  }

  &.is-empty-tag {
    .v-archive-event__img {
      filter:         brightness(50%) contrast(50%) grayscale(100%) url(#L6S-svg-gradient-map--green);
      -webkit-filter: brightness(50%) contrast(50%) grayscale(100%) url(#L6S-svg-gradient-map--green);
    }
  }
}
</style>
