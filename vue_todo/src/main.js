import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Veux.Store({
    state: {
      count: 0
    },
  mutations: {
      increment (state) {
        state.count++
      }
  }
});

store.commit('increment');
console.log(store.state.count);

new Vue({
  render: h => h(App),
}).$mount('#app');
