import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/matricula',
    name: 'Matricula',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Matricula.vue')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Formulario.vue')
  },
  {
    path: '/login',
    name: 'Loging',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Login.vue')
  },
  {
    path: '/verificacion',
    name: 'Verificacion',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Verificacion.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Perfil.vue')
  },
  {
    path: '/profesores',
    name: 'Profesores',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Profesores.vue')
  },
  {
    path: '/admon',
    name: 'Admon',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Admon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
