import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/page/Dashboard')
const Login = () => import('@/page/Login')
const ForgetPassword = () => import('@/page/ForgetPassword')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')

// 帳號管理

const UserList = () => import('@/page/UserList')

// 新增使用者

const CreateUser = () => import('@/page/CreateUser')

// 股票設定

const StockList = () => import('@/page/StockList')

// 新增股票

const CreateStock = () => import('@/page/CreateStock')

// 買賣壓力道比例

const BuySellPercentReport = () => import('@/page/BuySellPercentReport')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultContainer,
    children: [
      {
        path: 'dashboard',
        name: '首頁',
        component: Dashboard
      },
      {
        path: 'buy_sell_percent_report',
        name: '買賣壓力道比例',
        component: BuySellPercentReport
      },
      {
        path: 'users',
        meta: { label: '帳號管理'},
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            component: UserList,
          },
          {
            path: 'create_user',
            component: CreateUser,
          },
          {
            path: ':id',
            meta: { label: 'User Details'},
            name: 'User',
            component: CreateUser,
          }
        ]
      },
      {
        path: 'stock',
        meta: { label: '股票設定'},
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            component: StockList,
          },
          {
            path: 'create_stock',
            component: CreateStock,
          },
          {
            path: ':id',
            meta: { label: 'Stock Details'},
            name: 'Stock',
            component: CreateStock,
          }
        ]
      }
    ]
  },
  {
    path: '/',
    redirect: '/404',
    name: 'Pages',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
    {
      path: '404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '500',
      name: 'Page500',
      component: Page500
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'ForgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    ]
  }
  ]
})
