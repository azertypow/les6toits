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
        tag: "conservatoir",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
        hours: [
          "10h 30",
        ],
        dates: [
          "01.02",
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
        hours: [
          "10h 30",
        ],
        dates: [
          "01.02",
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "conservatoir",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687",
        hours: [
          "10h 30",
        ],
        dates: [
          "01.02",
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
        hours: [
          "10h 30",
        ],
        dates: [
          "01.02",
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenue",
        tag: "conservatoir",
        imageCoverURL: "https://images.unsplash.com/photo-1653460655240-14a4d7aeea4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300",
        hours: [
          "10h 30",
        ],
        dates: [
          "01.02",
        ],
        location: "Le Chalet",
      },

    ]
  }
}, 3000)


