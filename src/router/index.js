import Vue from 'vue'
import Router from 'vue-router'


import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Goods from '../views/Goods.vue'
import Welcome from '../views/Welcome.vue'
Vue.use(Router)


const routes = [{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue'),
		children: [
			{
				path:'/',
				redirect:'/welcome'
			},
			{
				path: '/welcome',
				name: 'Welcome',
				component: Welcome
			},
			{
				path: '/user',
				name: 'User',
				meta: {
					title: '用户列表'
				},
				component: User
			},
			{
				path: '/goods',
				name: 'Goods',
				meta: {
					title: '商品列表'
				},
				component: Goods
			}
		]
	},
]

const router = new Router({
	routes
})



export default router
