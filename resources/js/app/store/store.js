import Vue from 'vue';
import Vuex from 'vuex';
import {commentModule} from "./modules/comentModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        comment: commentModule
    }
});