import Vue from 'vue'
import Router from 'vue-router'
import Gerencia from '@/components/Gerencia'
import Newvicep from '@/components/Newvicep'
import ControlButtons from '@/components/ControlButtons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gerencia',
      component: Gerencia
    },
    {
      path: '/Newvicep',
      name: 'Newvicep',
      component: Newvicep
    },
    {
      path: '/ControlButtons',
      name: 'ControlButtons',
      component: ControlButtons
    }
  ]
})
