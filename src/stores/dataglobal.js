import { defineStore } from 'pinia'

export const useCounterStore = defineStore('dataglobal', {
  state: () => ({
    counter: 0,
    filtroSistemas: [],
    filtromarcas: [],
    filtropantallas: [],
    filtroNuevo: false,
    buscar: ''
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
