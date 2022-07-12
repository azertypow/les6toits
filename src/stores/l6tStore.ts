import { defineStore } from 'pinia'
import {stringifyQuery} from "vue-router"
import type {DeviceClassName} from "@/scripts/setDeviceClassName"

export const useL6tStore = defineStore({
  id: 'l6tStore',
  state: () => ({
    deviceClassName: "" as DeviceClassName,
    l6tData: {
      events: []
    } as IL6tData,
    l6tDataPresentation: {
      introContent: ""
    } as IL6tDataPresentation
  }),
  getters: {
  },
  actions: {
  }
})


export interface IL6tData {
  events: IL6tEvent[]
}

export interface IL6tDataPresentation {
  introContent: string
}

export type textHTML = string

export interface IL6tEvent {
  dates:        l6tDate[]
  tags:            "contrechamps" | "conservatoire" | "orchestre" | "eklekto"
  imageCoverURL?:  IL6tImage
  title?:          string
  subtitle?:      string
  textContent:    textHTML
  credit?:        textHTML
  location:       "Salle Peter Minten"
                  |"Forum"
                  |"Agora"
                  |"Athanor"
                  |"l'hermitage"
                  |"Le Chalet"
}

export interface IL6tImage {
  originalUrl: string
  largeUrl: string
  mediumUrl: string
  smallUrl: string
}

export type l6tDate = IL6tDate | IL6tDateCustom

export interface IL6tDate {
  jours: string
  hours: string[]
}

export interface IL6tDateCustom {
  text: string
}
