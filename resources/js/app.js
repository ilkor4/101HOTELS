import Vue from 'vue'
import App from './app/App.vue'
import components from './shared/ui/index.js'
import routeConfig from "./shared/config/routeConfig";

components.forEach((component) => {
    Vue.component(component.name, component);
})

const app = new Vue({
    router: routeConfig,
    render: h => h(App)
}).$mount('#app');
