import './style/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useL6tStore} from "@/stores/l6tStore"

const app = createApp(App)

app.config.compilerOptions.isCustomElement = (tag)=>{
  return tag.match('fecolormatrix') !== null
}

app.use(createPinia())
app.use(router)

app.mount('#app')

window.fetch('https://api.les6toits.ch/evenements', {
  method: 'GET',
}).then(async value => {
  useL6tStore().l6tData = await value.json()
})

window.fetch('https://api.les6toits.ch/presentation', {
  method: 'GET',
}).then(async value => {
  useL6tStore().l6tDataPresentation = await value.json()
})
