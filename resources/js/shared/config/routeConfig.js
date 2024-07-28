import Vue from 'vue';
import Router from 'vue-router';
import MainPage from "../../pages/MainPage.vue";
import CommentPage from "../../pages/CommentPage.vue";

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/comments/:id',
        component: CommentPage
    }
]

export default new Router({
    mode: 'history',
    routes
});
