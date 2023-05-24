export const state= () => ({
  cart:[],
  user:[],
  token:null
})

export const getters= {
  getCart(state){
    return state.cart;
  },
  getUser(state){
    return state.user;
  }
}
export const actions= {
  async addCart({commit}, payload){
    commit('addItem',payload)
  },
  async removeCart({commit}, payload){
    commit('removeItem',payload.id)
  },
  async getUser({commit}, payload){


    commit('getUser',payload)
  }
}


export const mutations= {
  addItem(state,cart){
    if(state.cart.filter(x=>x.id==cart.id).length>0){
      state.cart.filter(x=>x.id==cart.id)[0].count++;
    }else{
      state.cart.push(cart);

    }
  },
  removeItem(state,cart){
    state.cart=state.cart.filter(x=>x.id!=cart);
  },
}
