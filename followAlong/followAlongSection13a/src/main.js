import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

// Probably never use global mixins, since they are added to every Vue instance and every Vue component
Vue.mixin({
  created() {
    console.log('Global mixin - created');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
