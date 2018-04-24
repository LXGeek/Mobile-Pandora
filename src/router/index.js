import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index.vue'
import DocNotice from '@/components/doc-notice/doc-notice.vue'
import Setting from '@/components/setting/setting.vue'
import ProDetail from '@/components/pro-detail/pro-detail.vue'
import Query from '@/components/query/query.vue'
import ResDetail from '@/components/res-detail/res-detail.vue'
import QueryList from '@/components/query-list/query-list.vue'
import Login from '@/components/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/doc-notice',
      name: 'DocNotice',
      component: DocNotice
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/pro-detail',
      name: 'ProDetail',
      component: ProDetail
    },
    {
      path: '/query',
      name: 'Query',
      component: Query
    },
    {
      path: '/res-detail',
      name: 'ResDetail',
      component: ResDetail
    },
    {
      path: '/query-list',
      name: 'QueryList',
      component: QueryList
    }
  ]
})
