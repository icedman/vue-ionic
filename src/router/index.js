import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/pages/Form'
import AnotherPage from '@/pages/AnotherPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/another',
      name: 'Some Other',
      component: AnotherPage,
      meta: {
        layout: 'SplitPane'
      }
    },
    {
      path: '/yetAnother',
      name: 'Some Other',
      component: AnotherPage
    }
  ]
})
