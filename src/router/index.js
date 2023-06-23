import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Simplex from "../views/Simplex.vue"
import DualSimplex from "../views/DualSimplex.vue"
import Penalizacion from "../views/Penalizacion.vue"
import Voguel from "../views/Voguel.vue"
import Hungaro from "../views/Hungaro.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      test: /\.(html)$/,
      exclude: /(node_modules)/,
      use: {
        loader: "html-loader"
      }
    },
    {
      path: '/Simplex',
      name: 'simplex',
      component: Simplex 
    },
    {
      path: '/DualSimplex',
      name: 'dualSimplex',
      component: DualSimplex 
    },
    {
      path: '/Penalizacion',
      name: 'penalizacion',
      component: Penalizacion
    },
    {
      path: '/Voguel',
      name: 'voguel',
      component: Voguel
    },
    {
      path: '/Hungaro',
      name: 'hungaro',
      component: Hungaro
    },
  ]
})

export default router
