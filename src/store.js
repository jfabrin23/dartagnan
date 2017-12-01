import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const localStoragePlugin = (store) => {
  store.subscribe((mutation, state, a) => {
    localStorage.setItem('state', JSON.stringify(state))
  })
}

const state = localStorage.getItem('state')
const stateParsed = JSON.parse(state)

let user = {}

if (stateParsed && stateParsed.user) {
  user = stateParsed.user
}

const initialState = {
  user
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  plugins: [localStoragePlugin]
})
