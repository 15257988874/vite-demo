import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    msg: 'main中的信息',
  }),
  getters: {},
  actions: {},
})
