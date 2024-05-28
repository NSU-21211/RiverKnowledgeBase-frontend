import { defineStore } from 'pinia'

export const useRiverStore = defineStore('river', {
  state: () => ({
    riverGeoData: null as any | null,
  }),
  actions: {
    setRiverGeoData(data: any) {
      this.riverGeoData = data
    }
  }
})
