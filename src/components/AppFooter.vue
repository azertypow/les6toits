<template>
  <footer
      id="infos"
      class="v-app-footer l6t-with_gutter l6t-g l6t-with_row">
    <div class="l6t-g__coll-3-6 l6t-with_gutter">
      <img class="v-app-footer__map l6t-img" src="/public/map.jpg" alt="map">
    </div>

    <div class="v-app-footer__right l6t-g__coll-3-6">
      <div class="l6t-g">
        <div class="l6t-g__coll-3-6 l6t-no-margin l6t-with_gutter">
          <p>
            Les 6 toits
            Avenue de Chatelaine 43, 1201 Geneve, Suisse
          </p>
          <p>
            Arrêt de bus : Les Ouches 6, 19, 22, 51
          </p>
        </div>
        <div class="l6t-g__coll-3-6 l6t-no-margin l6t-with_gutter">
          <p>les6toits.ch</p>
          <p>Horaires Instrumentarium Lundi - mercredi : 11h - 15h</p>
        </div>
      </div>
      <div class="l6t-text--alternate l6t-with_gutter l6t-no-margin">
        Les 6 Toits ont reçu le soutien de la Ville de Genève,
        de la Loterie Romande, de la Fondation Ernst Göhner
        et d’une Fondation Genevoise.
        La création de l’identité visuelle est réalisé
        en partenariat avec la Head.
      </div>
      <div class="v-app-footer__logo-list l6t-g">
        <img class="l6t-with_gutter" src="/public/logo/EGS_Schriftzug_2_schwarz-300x105.jpeg" alt="">
        <img class="l6t-with_gutter" src="/public/logo/logo-avec-soutien-ville-geneve-positif.jpg" alt="">
        <img class="l6t-with_gutter" src="/public/logo/logo-head.png" alt="">
        <img class="l6t-with_gutter" src="/public/logo/LoRo-LogoBeneficiaires-NB-small.jpeg" alt="">
      </div>
    </div>

  </footer>

  <svg id="svg-filters" aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="teal-lightgreen" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feColorMatrix
        type="matrix"
        values="
        1 1 1 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 1 0
        ">
        </feColorMatrix>
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
})</script>

<style lang="scss">
.v-app-footer {
  .v-app-footer__map {
    width: 100%;
  }

  .v-app-footer__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .v-app-footer__logo-list {
    > img {
      display: block;
      height: 2rem;
    }
  }
}

#svg-filters {
  display: none !important;
}
</style>
