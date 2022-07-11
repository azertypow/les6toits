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
        title: "Comment le ciel est devenu",
        tag: "contrechamps",
        imageCoverURL: {
          originalUrl:'img/Contrechamps-Anne-Bassand.png',
          largeUrl:   'img/Contrechamps-Anne-Bassand.png',
          mediumUrl:  'img/Contrechamps-Anne-Bassand.png',
          smallUrl:   'img/Contrechamps-Anne-Bassand.png',
        },
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
        title: "Comment le ciel est devenu",
        tag: "conservatoir",
        imageCoverURL: {
          originalUrl:'img/Contrechamps-Flub-1.jpeg',
          largeUrl:   'img/Contrechamps-Flub-1.jpeg',
          mediumUrl:  'img/Contrechamps-Flub-1.jpeg',
          smallUrl:   'img/Contrechamps-Flub-1.jpeg',
        },
        dates: [
          {jours: '01.02.22', hours: ['10h30']},
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "eklekto",
        imageCoverURL: {
          originalUrl:"img/Contrechamps-Flub2.jpeg",
          largeUrl:   "img/Contrechamps-Flub2.jpeg",
          mediumUrl:  "img/Contrechamps-Flub2.jpeg",
          smallUrl:   "img/Contrechamps-Flub2.jpeg",
        },
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
        title: "Comment le ciel est devenu",
        tag: "orchestre",
        imageCoverURL: {
          originalUrl:"img/Contrechamps-Susanne-Peters.jpeg",
          largeUrl:   "img/Contrechamps-Susanne-Peters.jpeg",
          mediumUrl:  "img/Contrechamps-Susanne-Peters.jpeg",
          smallUrl:   "img/Contrechamps-Susanne-Peters.jpeg",
        },
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
        title: "Comment le ciel est devenu",
        tag: "contrechamps",
        imageCoverURL: {
          originalUrl:"img/CPMDT-cours-choix2.jpg",
          largeUrl:   "img/CPMDT-cours-choix2.jpg",
          mediumUrl:  "img/CPMDT-cours-choix2.jpg",
          smallUrl:   "img/CPMDT-cours-choix2.jpg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "contrechamps",
        imageCoverURL: {
          originalUrl:"img/CPMDT-Theatrogramme.jpg",
          largeUrl:   "img/CPMDT-Theatrogramme.jpg",
          mediumUrl:  "img/CPMDT-Theatrogramme.jpg",
          smallUrl:   "img/CPMDT-Theatrogramme.jpg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

      {
        credit: "credit",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "contrechamps",
        imageCoverURL: {
          originalUrl:"img/Eklekto.jpeg",
          largeUrl:   "img/Eklekto.jpeg",
          mediumUrl:  "img/Eklekto.jpeg",
          smallUrl:   "img/Eklekto.jpeg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

      {
        credit: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Consectetur fuga minus nemo non quasi saepe? Neque, placeat, tenetur?</p><p>Ad deserunt dolor doloribus fuga harum minus obcaecati officia quis quisquam sit?</p>",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "eklekto",
        imageCoverURL: {
          originalUrl:"img/House Music©Nicolas Masson.jpg",
          largeUrl:   "img/House Music©Nicolas Masson.jpg",
          mediumUrl:  "img/House Music©Nicolas Masson.jpg",
          smallUrl:   "img/House Music©Nicolas Masson.jpg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

      {
        credit: "<p>Lorem ipsum dolor sit amet, <i>consectetur adipisicing elit.</i> Adipisci amet animi beatae ducimus eum fuga fugiat, officiis qui quidem quisquam sapiente tempora tempore vitae. Dicta impedit perferendis quia soluta voluptas!</p>",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et fugiat inventore nemo rem sed sit! Aspernatur atque aut deserunt, eaque, esse eum fuga laudantium possimus quasi quia sequi tenetur.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "conservatoir",
        imageCoverURL: {
          originalUrl:"img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          largeUrl:   "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          mediumUrl:  "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          smallUrl:   "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

      {
        credit: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequuntur culpa, delectus dignissimos, earum eos ex ipsum libero nulla obcaecati odio optio praesentium quam reiciendis tempora tenetur vero? Ipsam.</p>",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque explicabo facere, facilis fugiat harum, magni minima natus omnis pariatur ratione reiciendis rem rerum similique tempore vel veniam voluptas. Praesentium, sint.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "eklekto",
        imageCoverURL: {
          originalUrl:"img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          largeUrl:   "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          mediumUrl:  "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          smallUrl:   "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

      {
        credit: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolore eius eveniet explicabo id illum ipsam ipsum modi perferendis quisquam reiciendis repellat sed totam ullam vero? Aut cumque dolor nemo!</p>",
        textContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cum enim fugiat ipsum, modi molestias nisi obcaecati officiis perspiciatis, qui quis quisquam quos sed, sunt tenetur ullam velit voluptatum.</p>",
        subtitle: "subtitle",
        title: "Comment le ciel est devenu",
        tag: "eklekto",
        imageCoverURL: {
          originalUrl:"img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          largeUrl:   "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          mediumUrl:  "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
          smallUrl:   "img/L'OCG-Portrait-de-groupe-automne2021.jpg",
        },
        dates: [
          {jours: '10.01.2023', hours: []},
          {text: 'tous les mercredis du mois'},
        ],
        location: "Le Chalet",
      },

    ]
  }
}, 3000)


