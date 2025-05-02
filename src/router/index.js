import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'
import NewsDetailsView from '../views/NewsDetailsView.vue'
import NewsCategoryView from '../views/NewsCategoryView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/news/:uuid',
    name: 'NewsDetails',
    component: NewsDetailsView,
    props: true
  },
  {
    path: '/category/:name',
    name: 'NewsCategory',
    component: NewsCategoryView,
    props: true
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUsView
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
