const state = {
  usa: 225,
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
}

// actions
const actions = {

}

// mutations
const mutations = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
