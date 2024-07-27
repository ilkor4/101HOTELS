import Vue from 'vue'
import App from './app/App.vue'
import components from './shared/ui/index.js'

components.forEach((component) => {
    Vue.component(component.name, component);
})

const app = new Vue({
    render: h => h(App)
}).$mount('#app');
