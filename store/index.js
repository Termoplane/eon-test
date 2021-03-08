export const state = () => ({
  activeType: '',
  data: [],
  loading: false
})

export const actions = {
  fetchType ({ commit }, type) {
    commit('SET_LOADING', true)
    commit('SET_ACTIVE', '')
    this.$api.get(`/${type}`).then((res) => {
      commit('SET_ACTIVE', type)
      commit('SET_DATA', res.data)
      commit('SET_LOADING', false)
    })
  }
}

export const mutations = {
  SET_ACTIVE (state, payload) {
    state.activeType = payload
  },
  SET_DATA (state, payload) {
    state.data = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  }
}
