<template>
  <div class="view-contact">

    <div class="l6t-g l6t-with_gutter">
      <div class="l6t-g-m__coll-1-6 l6t-g-l__coll-1-6"></div>
      <div class="l6t-g__coll-6-6 l6t-g-m__coll-4-6 l6t-g-l__coll-4-6 l6t-with_gutter" >
        <div class="l6t-with_gutter">
          <template
              v-if="status === 'empty'"
          >
            <h1>Nous contacter</h1>
            <p>Envoyez-nous un message, et nous vous répondrons au plus&nbsp;vite.</p>
          </template>
          <template
              v-else
          >
            <h1 v-if="status === 'sending PROGRESS'">Message en cours d'envoi…</h1>
            <h1 v-if="status === 'sending OK'">Message envoyé!</h1>
            <h1 v-if="status === 'sending ERROR'">Oups.</h1>
            <p>{{responseMassage}}</p>
          </template>
        </div>
      </div>
      <div class="l6t-g-m__coll-1-6 l6t-g-l__coll-1-6"></div>
      <div class="l6t-g-m__coll-1-6 l6t-g-l__coll-1-6"></div>
      <div
          class="l6t-g__coll-6-6 l6t-g-m__coll-4-6 l6t-g-l__coll-4-6 l6t-with_gutter"
          v-if="status === 'empty' || status === 'sending ERROR'"
      >
        <form>
          <div class="l6t-with_gutter">
            <label
            >Prénom
              <br><input required type="text" v-model="firstname">
            </label>
          </div>

          <div class="l6t-with_gutter">
            <label
            >Nom
              <br><input required type="text" v-model="name">
            </label>
          </div>

          <div class="l6t-with_gutter">
            <label
            >Adresse mail
              <br><input required type="email" v-model="email">
            </label>
          </div>

          <div class="l6t-with_gutter">
            <label
            >Numéro de téléphone avec indicatif du pays (+_ _ (0)123456789)
              <br><input type="tel" v-model="phone">
            </label>
          </div>


          <div class="l6t-with_gutter">
            <label
            >Message
              <br><textarea rows="10" v-model="message"></textarea>
            </label>
          </div>

          <div
              class="l6t-with_gutter"
          >
            <button
                class="with-img"
                @click.prevent="sendMessageData"
            ><img alt="envoyer" src="../assets/button/button--export.svg"></button>
          </div>
        </form>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import router from "@/router";
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  name: 'ViewContact',
  components: {AppFooter},

  data() {
    return {
      firstname: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      status: 'empty' as 'sending PROGRESS' | 'empty' | 'sending OK' | 'sending ERROR',
      responseMassage: '',
    }
  },

  watch: {
    phone() {
      this.phone = this.phone.trim().replace(/\s/g, '')
    },
  },

  methods: {
    async sendMessageData() {
      this.status = "sending PROGRESS"
      this.responseMassage  = ''

      window.scroll({
        top: 0,
        behavior: "smooth",
      })

      if(this.firstname.length < 3) {
        this.status           = 'sending ERROR'
        this.responseMassage  = 'Prénom doit contenir au moins 3 lettres'
        return
      }
      if(this.name.length < 3) {
        this.status           = 'sending ERROR'
        this.responseMassage  = 'Nom doit contenir au moins 3 lettres'
        return
      }
      if(this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) === null) {
        this.status           = 'sending ERROR'
        this.responseMassage  = 'Adresse mail incorrecte'
        return
      }
      if(
          this.phone.length > 0 && this.phone.match(/[a-zA-Z]/g)
      ) {
        this.status           = 'sending ERROR'
        this.responseMassage  = 'Un numéro de téléphone ne doit pas contenir de lettre'
        return
      }

      const contactUrl = new URL('https://api.les6toits.ch/contact?')

      contactUrl.searchParams.append('firstname', this.firstname)
      contactUrl.searchParams.append('name',      this.name)
      contactUrl.searchParams.append('email',     this.email)
      contactUrl.searchParams.append('phone',     this.phone)
      contactUrl.searchParams.append('message',   this.message)

      try {
        const response = await fetch(
            contactUrl.href,
            {
              method: 'POST',
            }
        )

        const jsonResponse = await response.json()

        window.setTimeout(() => {

          if(jsonResponse.succes === false) {
            this.responseMassage  = 'Problème(s):'
                + '-' + 'email: ' + jsonResponse.alert.email
                + '-' + 'message: ' + jsonResponse.alert.message
                + '-' + 'name: ' + jsonResponse.alert.name
            this.status           = 'sending ERROR'

          } else {
            this.responseMassage = "Merci de nous avoir contacté, nous mettons tout en œuvre pour vous répondre au plus vite."
            this.status           = 'sending OK'
          }

        }, 2500)


      } catch {
          this.responseMassage  = 'Erreur de connection, réesséyez…'
          this.status           = 'sending ERROR'
      }

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
