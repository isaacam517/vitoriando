import Vue from 'vue';
import Router from 'vue-router';

import firebase from './services/firebaseConnection';

import Historia from './pages/Historia';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Contato from './pages/Contato';
import CadastrarVagas from './pages/CadastrarVagas';
import Vagas from './pages/Vagas';
import Noticias from './pages/Noticias';
import Entretenimento from './pages/Entretenimento';
import Login from './pages/Login';
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
            path: '/login',
            component: Login,
            
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
        {
            path: '/cadastrarvagas/:userid',
            component: CadastrarVagas,
            props: true,
            meta:{
                requiresAuth: true,
            }
        },
        // {
        //     path: '/login',
        //     component: Login,
        // },
    ]
});
router.beforeEach((to, from, next)=>{
    const requiresAuth = to.matched.some( x => x.meta.requiresAuth);

    if(requiresAuth && !firebase.auth().currentUser){
        next('/login');
    }else{
        next();
    }
})

export default router;
