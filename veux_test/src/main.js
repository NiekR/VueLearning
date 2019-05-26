import Vue from 'vue'
import App from './App.vue'
import store from './store';
Vue.config.productionTip = false;

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// });
//
// store.commit('increment');
// console.log(store.state.count);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
