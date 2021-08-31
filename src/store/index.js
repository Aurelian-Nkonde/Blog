import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "aconte",
    posts: []
  },
  getters: {
    posts(state){
      return state.posts
    }
  },
  mutations: {
    addposts(state, data){
      state.posts.push({
        title: data.title,
        paragraphy: data.body,
        cover: data.image
      })
    }
  },
  actions: {
    submitdata({commit}, data){
      setTimeout(() => {
        commit('addposts', data)
      }, 1000)
    }
  },
  modules: {},
});
