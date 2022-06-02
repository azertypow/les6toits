import { defineStore } from 'pinia'
import {stringifyQuery} from "vue-router"

export const useL6tStore = defineStore({
  id: 'l6tStore',
  state: () => ({
    l6tData: {
      events: []
    } as IL6tData
  }),
  getters: {
  },
  actions: {
  }
})


export interface IL6tData {
  events: IL6tEvent[]
}

export type textHTML = string

export interface IL6tEvent {
  dates:        l6tDate[]
  tag:            "contrechamps" | "conservatoir" | "orchestre" | "eklekto"
  imageCoverURL?:  string
  title?:          string
  subtitle?:      string
  textContent:    textHTML
  credit?:        string
  location:       "Salle Peter Minten"
                  |"Forum"
                  |"Agora"
                  |"Athanor"
                  |"l'hermitage"
                  |"Le Chalet"
}

export type l6tDate = IL6tDate | IL6tDateCustom

export interface IL6tDate {
  jours: string
  hours: string[]
}

export interface IL6tDateCustom {
  text: string
}
