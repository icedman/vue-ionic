import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/pages/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
})
