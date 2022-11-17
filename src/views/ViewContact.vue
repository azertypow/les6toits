<template>
  <div class="view-contact">

    <div class="l6t-g l6t-with_gutter">
      <div class="l6t-g-m__coll-1-6 l6t-g-l__coll-1-6"></div>
      <div class="l6t-g__coll-6-6 l6t-g-m__coll-4-6 l6t-g-l__coll-4-6 l6t-with_gutter" >
        <div class="l6t-with_gutter">
          <template
              v-if="!isSending"
          >
            <h1>Nous contacter</h1>
            <p>Envoyez-nous un message, et nous vous répondrons au plus&nbsp;vite.</p>
          </template>
          <template
              v-else
          >
            <h1>Message envoyé!</h1>
            <p>Merci de nous avoir contacté, nous mettons tout en œuvre pour vous répondre au plus vite.</p>
          </template>
        </div>
      </div>
      <div class="l6t-g-m__coll-1-6 l6t-g-l__coll-1-6"></div>
      <div class="l6t-g-m__coll-1-6 l6t-g-l__coll-1-6"></div>
      <div
          class="l6t-g__coll-6-6 l6t-g-m__coll-4-6 l6t-g-l__coll-4-6 l6t-with_gutter"
          v-if="!isSending"
      >
        <form>
          <div class="l6t-with_gutter">
            <label
            >nom
              <br><input required type="text">
            </label>
          </div>

          <div class="l6t-with_gutter">
            <label
            >prénom
              <br><input required type="text">
            </label>
          </div>

          <div class="l6t-with_gutter">
            <label
            >adresse mail
              <br><input required type="text">
            </label>
          </div>

          <div class="l6t-with_gutter">
            <label
            >message
              <br><textarea rows="10"></textarea>
            </label>
          </div>

          <div
              class="l6t-with_gutter"
          >
            <button class="with-img" @click.prevent="sendMessageData"><img alt="envoyer" src="../assets/button/button--export.svg"></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import router from "@/router";

export default defineComponent({
  name: 'ViewContact',
  components: {},

  data() {
    return {
      isSending: false,
    }
  },


  computed: {
    sendMessageData() {
      this.isSending = true
      router.push('/contact')
    },
  },

});
</script>

<style lang="scss" scoped>
.view-contact {
  padding-top:    15vh;
  padding-bottom: 15vh;

  form {
    margin-top: 2rem;
  }
}
</style>