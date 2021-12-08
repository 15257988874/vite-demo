import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'lux',
    phone: '13858952075',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    changeName(name: string) {
      // 可以做异步操作
      this.name = name
    },
  },
})
