import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav/nav.vue'
import DocNotice from '@/components/doc-notice/doc-notice.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/doc-notice',
      name: 'DocNotice',
      component: DocNotice
    }
  ]
})
