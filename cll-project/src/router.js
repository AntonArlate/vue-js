

import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';
import BlogPage from './views/BlogPage.vue';
import BlogDetailsPage from './views/BlogDetailsPage.vue';


Vue.use(VueRouter);

// пробую использовать библиотеку Vue роутер
const router = new VueRouter({
    // mode: 'history', // для использования форматирования строки адреса без #
    routes: [
        { path: '/', component: HomePage },
        { path: '/blog', component: BlogPage },
        { path: '/blog/details/:id', name: 'details', component: BlogDetailsPage },
    ],
});

//экспортируется некий обект VueRouter, посмотрим что можно с ним делать дальше
export default router;