import './style/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useL6tStore} from "@/stores/l6tStore"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


window.setInterval(() => {
  useL6tStore().l6tData = {
    events: [
      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "contrechamps",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
        dates: [
          {jours: '01.02.22', hours: ['10h30', '11h45', '20h00']},
          {jours: '02.02.22', hours: ['10h30', '11h45', '20h00']},
          {jours: '03.02.22', hours: ['10h30', '11h45', '20h00']},
        ],
        location: "Le Chalet",
      },


      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "conservatoir",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=250",
        dates: [
          {jours: '01.02.22', hours: ['10h30']},
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "eklekto",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687",
        dates: [
          {jours: '10.02.22', hours: ['10h30', '11h45', '20h00']},
          {jours: '20.02.22', hours: ['11h45', '20h00']},
          {jours: '30.02.22', hours: ['20h00']},
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "conservatoir",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=500",
        dates: [
          {jours: '01.02.22', hours: ['10h30', '11h45', '20h00']},
          {jours: '02.02.22', hours: ['10h30', '11h45', '20h00']},
          {jours: '03.02.22', hours: ['10h30', '11h45', '20h00']},
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "orchestre",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300",
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

    ]
  }
}, 3000)


