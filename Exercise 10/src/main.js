import Vue from 'vue'
import App from './App.vue'

Vue.directive('myon', {
  bind(el,binding,vnode) {
    if (binding.arg && binding.value) {
      el.addEventListener(binding.arg, binding.value);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
