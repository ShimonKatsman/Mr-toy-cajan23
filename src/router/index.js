// בס"ד

import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import About from './../views/AboutView.vue'
import ToyIndex from './../views/ToyIndex.vue'
import ToyEdit from './../views/ToyEdit.vue'
import ToyDetails from './../views/ToyDetails.vue'
import DatePicker from './../views/DatePicker.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/toy',
      name: 'toy',
      component: ToyIndex
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'edit',
      component: ToyEdit
    },
    {
      path: '/toy/details/:toyId?',
      name: 'details',
      component: ToyDetails
    },
    {
      path: '/toy/date-picker',
      name: 'date-picker',
      component: DatePicker
    },
  ]
})

export default router
