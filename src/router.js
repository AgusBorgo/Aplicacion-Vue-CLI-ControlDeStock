import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import MultipleChoice from './components/UsuariosApi.vue';
import Formulario from './components/Formulario.vue';

const routes = [
    {path: '/', redirect: '/UsuariosApi.vue'},

    { path: '/UsuariosApi.vue', component: MultipleChoice },
    { path: '/formulario', component: Formulario},

    {path: '/:pathMatch(.*)*', redirect: '/UsuariosApi.vue'},
]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;