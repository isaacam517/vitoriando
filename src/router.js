import Vue from 'vue';
import Router from 'vue-router';

//import firebase from './services/firebaseConnection';

import Historia from './pages/Historia';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Contato from './pages/Contato';
import Vagas from './pages/Vagas';
import Noticias from './pages/Noticias';
import Entretenimento from './pages/Entretenimento';
//import Login from './pages/Login';
//import Perfil from './pages/Perfil';

Vue.use(Router);

const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/historia',
            component: Historia,
            
        },
        {
            path: '/sobremim',
            component: SobreMim,
            
        },
        {
            path: '/contato',
            component: Contato,
            
        },
        {
            path: '/noticias',
            component: Noticias,
            
        },
        {
            path: '/entretenimento',
            component: Entretenimento,
            
        },
        {
            path: '/vagas',
            component: Vagas,
            
        },
        // {
        //     path: '/perfil/:userid',
        //     component: Perfil,
        //     props: true,
        //     meta:{
        //         requiresAuth: true,
        //     }
        // },
        // {
        //     path: '/login',
        //     component: Login,
        // },
    ]
});

export default router;
