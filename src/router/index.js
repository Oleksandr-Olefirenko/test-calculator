import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import FractionDetails from '@/components/FractionDetails'
import Fraction from '@/components/Fraction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/fraction/:id',
      name: 'FractionDetails',
      component: FractionDetails,
      props: true
    },
    {
      path: '/test/',
      name: 'fraction',
      component: Fraction
    }
  ]
})
