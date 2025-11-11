import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import MultipleChoice from './components/MultipleChoice.vue';
import Formulario from './components/Formulario.vue';

const routes = [
    {path: '/', redirect: '/multipleChoice'},

    { path: '/multipleChoice', component: MultipleChoice },
    { path: '/formulario', component: Formulario},

    {path: '/:pathMatch(.*)*', redirect: '/multipleChoice'},
]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;