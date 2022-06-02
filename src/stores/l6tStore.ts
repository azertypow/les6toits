import { defineStore } from 'pinia'

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
  dates:          string[]
  hours:          string[]
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
