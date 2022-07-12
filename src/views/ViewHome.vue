<template>
  <div class="v-view-home">

    <section
        id="presentation"
        class="v-view-home__intro l6t-g l6t-with_gutter"
    >
      <div class="v-view-home__intro__text l6t-g-l__coll-3-6 l6t-with_gutter l6t-remove-child-margin" >
        <p>
          Un projet ambitieux au niveau architectural, un projet ambitieux en termes de collaboration artistique et un projet ancré au sein d’un quartier en plein développement.
          Notre souhait : nous insérer dans une dynamique de quartier plurielle
          et résolument tournée vers les arts, l’innovation, la culture, les rencontres
          et l’artisanat : la HEAD, l’ensemble multi-activités Quartet, le développement du périmètre de la Concorde et du Centre Culturel de Châtelaine forment tout autant de viviers foisonnants dans lesquels s’inscrit ce projet.
        </p>
        <p style="text-align: center">
          le Conservatoire populaire, <a href="#">l’Ensemble Contrechamps</a>, Eklekto et l’OCG
        </p>
        <p>
          Le projet est une collaboration inédite de quatre structures musicales
          et théâtrales : une école de musique et de théâtre (Conservatoire populaire), un ensemble contemporain spécialisé dans les projets immersifs (Ensemble Contrechamps), un ensemble de percussion réputé pour ses mises en scènes de concert (Eklekto) et un orchestre renommé pour ses productions scéniques originales (L’OCG).
          Le lieu bénéficiera d’une atmosphère propice à l’échange, à la créativité
          et la création, à l’émulation entre élèves et professionnels
          et aux collaborations interdisciplinaires et interinstitutionnelles.
        </p>
      </div>

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
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {IL6tEvent} from "@/stores/l6tStore"
import {useL6tStore} from "@/stores/l6tStore"
import Event from "@/components/Event.vue"

export default defineComponent({
  components: {Event},
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
